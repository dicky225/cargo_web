function SearchByRoute() {
    const today = new Date().toISOString().slice(0, 10);

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
                            id="route-date"
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

export default SearchByRoute;
