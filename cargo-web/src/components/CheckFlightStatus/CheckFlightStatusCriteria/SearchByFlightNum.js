function SearchByFlightNum() {
    const today = new Date().toISOString().slice(0, 10);

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
                    />
                </div>
            </div>

            <div className="flight-row flight-row--split">
                <div className="field">
                    <label className="field-label" htmlFor="status">
                        Status
                    </label>
                    <div className="select-wrapper">
                        <select id="status" className="field-input field-select">
                            <option>Departing</option>
                            <option>Arriving</option>
                        </select>
                        <span className="select-arrow">▾</span>
                    </div>
                </div>

                <div className="field">
                    <label className="field-label" htmlFor="date">
                        Date
                    </label>
                    <div className="field-with-icon">
                        <input
                            id="date"
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

export default SearchByFlightNum;
