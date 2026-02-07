import '../../../App.css';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import { useSelector } from 'react-redux';
import FlightStatusResultBox from './FlightStatusResultBox';

function CheckFlightStatusResultPage({ onNavigate }) {
    const { criteria, results, isLoading, error } = useSelector(
        (state) => state.flightStatus,
    );

    const hasResults = Array.isArray(results) && results.length > 0;

    let summaryLocation = '';
    if (criteria) {
        if (criteria.mode === 'flight-number') {
            // For flight number search, show the flight number itself
            summaryLocation = criteria.flightNumber || '';
        } else if (criteria.mode === 'airport') {
            // For airport search, show the selected airport code
            summaryLocation = criteria.airport || '';
        } else if (criteria.mode === 'route') {
            // For route search, show "ORIGIN → DESTINATION"
            const origin = criteria.origin || '';
            const destination = criteria.destination || '';
            if (origin || destination) {
                summaryLocation = [origin, destination].filter(Boolean).join(' → ');
            }
        }
    }
    return (
        <div className="app">
            <Header onNavigate={onNavigate} />

            <main className="results-main">
                {criteria && (
                    <div className="results-summary-bar">
                        <div className="results-summary-left">
                            {summaryLocation && (
                                <>
                                    <span className="results-summary-icon" aria-hidden="true">
                                        ✈
                                    </span>
                                    <span className="results-summary-item results-summary-location">
                                        {summaryLocation}
                                    </span>
                                </>
                            )}
                            {criteria.date && (
                                <>
                                    <span className="results-summary-separator">|</span>
                                    <span className="results-summary-item">{criteria.date}</span>
                                </>
                            )}
                            <span className="results-summary-separator">|</span>
                            <span className="results-summary-item">All time</span>
                        </div>

                        <button
                            type="button"
                            className="link-button results-modify"
                            onClick={() => onNavigate && onNavigate('check-flight-status')}
                        >
                            Modify
                        </button>
                    </div>
                )}

                <div className="results-header">
                    <div>
                        <h1 className="results-title">Flight status results</h1>
                        <p className="results-count">
                            {!isLoading && !error && hasResults ? (
                                <>
                                    <span className="results-count-number">{results.length}</span>{' '}
                                    flight results
                                </>
                            ) : (
                                'Flight results'
                            )}
                        </p>
                    </div>

                    {!isLoading && !error && hasResults && (
                        <button
                            type="button"
                            className="link-button results-expand-all"
                        >
                            Expand all flight details
                        </button>
                    )}
                </div>

                {isLoading && (
                    <p className="flight-results">Searching...</p>
                )}

                {!isLoading && error && (
                    <p className="flight-results flight-results--error">{error}</p>
                )}

                {!isLoading && !error && hasResults && (
                    <section className="results-list" aria-label="Flight status results">
                        {results.map((flight) => {
                            const flightNumber = `${flight.carrierCode || ''}${flight.flightNo || ''}`;
                            const key = `${flightNumber}-${flight.STD || flight.flightDate || flight.departureTime || flight.arrivalTime || Math.random()}`;

                            return (
                                <FlightStatusResultBox
                                    key={key}
                                    flight={flight}
                                />
                            );
                        })}
                    </section>
                )}
            </main>

            <Footer />
        </div>
    );
}

export default CheckFlightStatusResultPage;
