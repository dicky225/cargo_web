import { useState } from 'react';
import '../../../App.css';

const tabs = [
    { id: 'flight-number', label: 'Search by flight number' },
    { id: 'airport', label: 'Search by airport' },
    { id: 'route', label: 'Search by route' },
];

function CheckFlightStatusPanel({ activeTab, onTabChange, onSearch, children }) {
    const handleSubmit = (event) => {
        event.preventDefault();

        if (onSearch) {
            onSearch(event);
        }
    };

    return (
        <section className="flight-status" aria-labelledby="flight-status-heading">
            <h1 id="flight-status-heading" className="flight-title">
                Check flight status
            </h1>

            <div className="flight-tabs" role="tablist" aria-label="Flight search mode">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        type="button"
                        className={
                            tab.id === activeTab
                                ? 'flight-tab flight-tab--active'
                                : 'flight-tab'
                        }
                        role="tab"
                        aria-selected={tab.id === activeTab}
                        onClick={() => onTabChange && onTabChange(tab.id)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <form
                className="flight-card"
                onSubmit={handleSubmit}
            >
                {children}

                <div className="flight-row flight-row--actions">
                    <button
                        type="submit"
                        className="primary-button flight-search-button"
                    >
                        Search flights
                    </button>
                </div>
            </form>
        </section>
    );
}

export default CheckFlightStatusPanel;
