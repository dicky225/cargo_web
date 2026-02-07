import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../../../App.css';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import CheckFlightStatusPanel from './CheckFlightStatusCriteriaPanel';
import SearchByFlightNum from './SearchByFlightNum';
import SearchByAirport from './SearchByAirport';
import SearchByRoute from './SearchByRoute';
import {
    setSearchResults,
    setSearchLoading,
    setSearchError,
    clearLastSearchCriteria,
} from '../../../store/flightStatusSlice';

function CheckFlightStatusPage({ onNavigate }) {
    const dispatch = useDispatch();
    const { lastSearchMode } = useSelector((state) => state.flightStatus);
    const [activeTab, setActiveTab] = useState(lastSearchMode || 'flight-number');

    // Clear last search criteria when tab changes
    useEffect(() => {
        dispatch(clearLastSearchCriteria());
    }, [activeTab, dispatch]);

    const handleSearch = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        let payload;
        let url;

        if (activeTab === 'airport') {
            url = 'http://localhost:8080/flight/v1/flight-statuses/search-by-airport'
            payload = {
                airportCode: formData.get('airport') || '',
                status: formData.get('status') || '',
                date: formData.get('date') || '',
            };
        } else if (activeTab === 'route') {
            url = 'http://localhost:8080/flight/v1/flight-statuses/search-by-route'
            const origin = formData.get('origin') || '';
            const destination = formData.get('destination') || '';
            payload = {
                originAirportCode: origin,
                destinationAirportCode: destination,
                date: formData.get('date') || '',
            };
        } else {
            url = 'http://localhost:8080/flight/v1/flight-statuses/search-by-flight-num'
            payload = {
                flightNum: formData.get('flightNumber') || '',
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

            const response = await fetch(url, {
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
                    mode: activeTab,
                }),
            );
            dispatch(setSearchLoading(false));
        } catch (err) {
            dispatch(setSearchError(err.message));
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
