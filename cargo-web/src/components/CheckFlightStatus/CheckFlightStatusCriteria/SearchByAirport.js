import { useSelector } from 'react-redux';

function SearchByAirport() {
    const { lastSearchCriteria } = useSelector((state) => state.flightStatus);

    const defaultAirport = lastSearchCriteria?.airport || '';
    const defaultStatus = lastSearchCriteria?.status || 'Not_yet_departed';
    const defaultDate = lastSearchCriteria?.date || '2025-12-15';

    return (
        <>
            <div className="flight-row">
                <div className="field">
                    <label className="field-label" htmlFor="airport">
                        Airport
                    </label>
                    <input
                        id="airport"
                        name="airport"
                        type="text"
                        className="field-input"
                        placeholder="Enter airport name or code"
                        defaultValue={defaultAirport}
                        required
                    />
                </div>
            </div>

            <div className="flight-row flight-row--split">
                <div className="field">
                    <label className="field-label" htmlFor="airport-status">
                        Status
                    </label>
                    <div className="select-wrapper">
                        <select
                            id="airport-status"
                            name="status"
                            className="field-input field-select"
                            defaultValue={defaultStatus}
                        >
                            <option value="Not_yet_departed">Not yet departed</option>
                            <option value="Departed">Departed</option>
                            <option value="Arrived">Arrived</option>
                            <option value="Cancelled">Cancelled</option>
                        </select>
                        <span className="select-arrow">▾</span>
                    </div>
                </div>

                <div className="field">
                    <label className="field-label" htmlFor="airport-date">
                        Date
                    </label>
                    <input
                        id="airport-date"
                        name="date"
                        type="date"
                        className="field-input"
                        defaultValue={defaultDate}
                    />
                </div>
            </div>
        </>
    );
}

export default SearchByAirport;
