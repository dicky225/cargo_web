import { useState } from 'react';
import { useDispatch } from 'react-redux';
import '../../App.css';
import Header from '../common/Header';
import Footer from '../common/Footer';
import CheckFlightStatusPanel from './CheckFlightStatusPanel';
import SearchByFlightNum from './SearchByFlightNum';
import SearchByAirport from './SearchByAirport';
import SearchByRoute from './SearchByRoute';
import { setSearchResults } from '../../store/flightStatusSlice';

function CheckFlightStatusPage({ onNavigate }) {
    const [activeTab, setActiveTab] = useState('flight-number');
    const [results, setResults] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();

    const handleSearch = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        let payload;
        if (activeTab === 'airport') {
            payload = {
                mode: 'airport',
                airport: formData.get('airport') || '',
                status: formData.get('status') || '',
                date: formData.get('date') || '',
            };
        } else if (activeTab === 'route') {
            payload = {
                mode: 'route',
                origin: formData.get('origin') || '',
                destination: formData.get('destination') || '',
                date: formData.get('date') || '',
            };
        } else {
            payload = {
                mode: 'flight-number',
                flightNumber: formData.get('flightNumber') || '',
                status: formData.get('status') || '',
                date: formData.get('date') || '',
            };
        }

        try {
            setIsLoading(true);
            setError(null);

            const response = await fetch('http://localhost:8080/search', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error(`Search failed with status ${response.status}`);
            }

            const data = await response.json().catch(() => null);
            setResults(data);
            dispatch(
                setSearchResults({
                    criteria: payload,
                    results: Array.isArray(data) ? data : [],
                }),
            );

            if (onNavigate) {
                onNavigate('check-flight-status-result');
            }
        } catch (err) {
            setError(err.message || 'Search failed');
        } finally {
            setIsLoading(false);
        }
    };

    let criteriaContent;
    if (activeTab === 'airport') {
        criteriaContent = <SearchByAirport />;
    } else if (activeTab === 'route') {
        criteriaContent = <SearchByRoute />;
    } else {
        criteriaContent = <SearchByFlightNum />;
    }

    return (
        <div className="app">
            <Header onNavigate={onNavigate} />

            <main className="flight-main">
                <CheckFlightStatusPanel
                    activeTab={activeTab}
                    onTabChange={setActiveTab}
                    onSearch={handleSearch}
                >
                    {criteriaContent}
                </CheckFlightStatusPanel>

                {isLoading && (
                    <p className="flight-results">Searching...</p>
                )}
                {error && !isLoading && (
                    <p className="flight-results flight-results--error">
                        {error}
                    </p>
                )}
                {results && !isLoading && !error && (
                    <pre className="flight-results">
                        {JSON.stringify(results, null, 2)}
                    </pre>
                )}
            </main>

            <Footer />
        </div>
    );
}

export default CheckFlightStatusPage;
