import { useSelector } from 'react-redux';
import { useRef } from 'react';

function SearchByRoute() {
    const { lastSearchCriteria } = useSelector((state) => state.flightStatus);
    const dateRef = useRef(null);

    const defaultOrigin = lastSearchCriteria?.originAirportCode || '';
    const defaultDestination = lastSearchCriteria?.destinationAirportCode || '';
    const defaultDate = lastSearchCriteria?.date || '2025-12-15';

    const handleClearField = (ref) => {
        if (ref.current) {
            ref.current.value = '';
            ref.current.focus();
        }
    };

    return (
        <>
            <div className="flight-row flight-row--split">
                <div className="field">
                    <label className="field-label" htmlFor="origin">
                        Origin
                    </label>
                    <input
                        id="origin"
                        name="origin"
                        type="text"
                        className="field-input"
                        placeholder="From (airport code)"
                        defaultValue={defaultOrigin}
                        required
                    />
                </div>

                <div className="field">
                    <label className="field-label" htmlFor="destination">
                        Destination
                    </label>
                    <input
                        id="destination"
                        name="destination"
                        type="text"
                        className="field-input"
                        placeholder="To (airport code)"
                        defaultValue={defaultDestination}
                        required
                    />
                </div>
            </div>

            <div className="flight-row">
                <div className="field">
                    <label className="field-label" htmlFor="route-date">
                        Date
                    </label>
                    <div className="field-with-icon">
                        <input
                            ref={dateRef}
                            id="route-date"
                            name="date"
                            type="date"
                            className="field-input"
                            defaultValue={defaultDate}
                        />
                        <button
                            type="button"
                            className="field-clear-button"
                            onClick={() => handleClearField(dateRef)}
                            aria-label="Clear date"
                        >
                            ✕
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SearchByRoute;
