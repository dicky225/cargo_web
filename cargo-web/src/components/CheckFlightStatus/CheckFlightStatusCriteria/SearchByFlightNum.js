import { useSelector } from 'react-redux';
import { useRef } from 'react';

function SearchByFlightNum() {
    const { lastSearchCriteria } = useSelector((state) => state.flightStatus);
    const statusRef = useRef(null);
    const dateRef = useRef(null);

    const defaultFlightNumber = lastSearchCriteria?.flightNumber || '';
    const defaultStatus = lastSearchCriteria?.status || 'Not_yet_departed';
    const defaultDate = lastSearchCriteria?.date || '2025-12-15';

    const handleClearField = (ref) => {
        if (ref.current) {
            ref.current.value = '';
            ref.current.focus();
        }
    };

    return (
        <>
            <div className="flight-row">
                <div className="field">
                    <label className="field-label" htmlFor="flight-number">
                        Flight number
                    </label>
                    <input
                        id="flight-number"
                        name="flightNumber"
                        type="text"
                        className="field-input"
                        placeholder="Enter your flight number"
                        defaultValue={defaultFlightNumber}
                        required
                    />
                </div>
            </div>

            <div className="flight-row flight-row--split">
                <div className="field">
                    <label className="field-label" htmlFor="status">
                        Status
                    </label>
                    <div className="select-wrapper">
                        <select ref={statusRef} id="status" name="status" className="field-input field-select" defaultValue={defaultStatus}>
                            <option value="Not_yet_departed">Not yet departed</option>
                            <option value="Departed">Departed</option>
                            <option value="Arrived">Arrived</option>
                            <option value="Cancelled">Cancelled</option>
                        </select>
                        <span className="select-arrow">▾</span>
                        <button
                            type="button"
                            className="field-clear-button"
                            onClick={() => handleClearField(statusRef)}
                            aria-label="Clear status"
                        >
                            ✕
                        </button>
                    </div>
                </div>

                <div className="field">
                    <label className="field-label" htmlFor="date">
                        Date
                    </label>
                    <div className="field-with-icon">
                        <input
                            ref={dateRef}
                            id="date"
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

export default SearchByFlightNum;
