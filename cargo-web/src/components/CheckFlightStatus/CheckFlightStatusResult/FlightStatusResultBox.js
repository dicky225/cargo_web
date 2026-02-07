function formatTime(timeStr) {
    if (!timeStr) return '--:--';
    const cleaned = timeStr.replace(/[+-].*$/, '');
    if (cleaned.length !== 4) return timeStr;
    return `${cleaned.slice(0, 2)}:${cleaned.slice(2)}`;
}

function humanStatus(flightStatus, cancelled) {
    if (cancelled) return 'Cancelled';
    if (!flightStatus) return '';
    return flightStatus.replace(/_/g, ' ');
}

function formatAircraftCategory(category) {
    if (!category) return '';
    // Convert WIDE_BODY to Wide Body, NARROW_BODY to Narrow Body, etc.
    return category
        .split('_')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}

function FlightStatusResultBox({ flight }) {
    if (!flight) return null;

    const flightNumber = `${flight.carrierCode || ''}${flight.flightNo || ''}`;
    const statusText = humanStatus(flight.flightStatus, flight.flightCancelled);
    const isCancelled = flight.flightCancelled || /cancelled/i.test(statusText);
    const statusClass = isCancelled ? 'status-text status-text--cancelled' : 'status-text status-text--notyet';

    return (
        <article className="results-row">
            <div className="results-row-main">
                <div className="results-cell results-flight-number">
                    <div className="results-flight-code">{flightNumber}</div>
                </div>

                <div className="results-cell results-departure">
                    <div className="results-time-airport">
                        <span className="results-time">{formatTime(flight.departureTime)}</span>
                        <span className="results-airport-code">{flight.originAirportCode}</span>
                    </div>
                    <div className="results-meta-tag">Scheduled</div>
                </div>

                <div className="results-cell results-arrow">
                    <span className="results-arrow-icon">✈</span>
                </div>

                <div className="results-cell results-arrival">
                    <div className="results-time-airport">
                        <span className="results-time">{formatTime(flight.arrivalTime)}</span>
                        <span className="results-airport-code">{flight.destinationAirportCode}</span>
                    </div>
                    <div className="results-meta-tag">Scheduled</div>
                </div>

                <div className="results-cell results-status">
                    <span className={statusClass}>
                        <span className="status-dot" />
                        {statusText}
                    </span>
                </div>
            </div>

            <div className="results-row-footer">
                <div className="results-aircraft">
                    {formatAircraftCategory(flight.aircraftCategory)}
                    {flight.aircraftType && `, ${flight.aircraftType}`}
                </div>
                <button type="button" className="results-show-more">Show more</button>
            </div>
        </article>
    );
}

export default FlightStatusResultBox;
