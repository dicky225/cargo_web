import { useState } from 'react';
import { useDispatch } from 'react-redux';
import '../../../App.css';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import CheckFlightStatusPanel from './CheckFlightStatusCriteriaPanel';
import SearchByFlightNum from './SearchByFlightNum';
import SearchByAirport from './SearchByAirport';
import SearchByRoute from './SearchByRoute';
import sampleFlightResults from '../../../sampleData/flightStatusSample';
import {
    setSearchResults,
    setSearchLoading,
    setSearchError,
} from '../../../store/flightStatusSlice';

function CheckFlightStatusPage({ onNavigate }) {
    const dispatch = useDispatch();
    const [activeTab, setActiveTab] = useState('flight-number');

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
            dispatch(setSearchError(null));
            dispatch(setSearchLoading(true));

            if (onNavigate) {
                onNavigate('check-flight-status-result');
            }

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

            const resultsArray = Array.isArray(data) ? data : [];

            dispatch(
                setSearchResults({
                    criteria: payload,
                    results: resultsArray,
                }),
            );
            dispatch(setSearchLoading(false));
        } catch (err) {
            // Fallback to local sample data when the API call fails,
            // so the results page can still render and be tested.
            // You can remove this block when the backend is stable.
            console.error('Search failed, using sample data instead:', err);

            dispatch(
                setSearchResults({
                    criteria: payload,
                    results: sampleFlightResults,
                }),
            );
            dispatch(setSearchError(null));
            dispatch(setSearchLoading(false));
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
            </main>

            <Footer />
        </div>
    );
}

export default CheckFlightStatusPage;
