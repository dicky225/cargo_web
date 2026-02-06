function SearchByAirport() {
    const today = new Date().toISOString().slice(0, 10);

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
                        >
                            <option>Departing</option>
                            <option>Arriving</option>
                        </select>
                        <span className="select-arrow">▾</span>
                    </div>
                </div>

                <div className="field">
                    <label className="field-label" htmlFor="airport-date">
                        Date
                    </label>
                    <div className="field-with-icon">
                        <input
                            id="airport-date"
                            name="date"
                            type="date"
                            className="field-input"
                            defaultValue={today}
                        />
                        <span className="field-icon" aria-hidden="true">
                            📅
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SearchByAirport;
