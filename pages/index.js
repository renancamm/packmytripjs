export default function Home() {
    return (
        <main>
            <div className="hero">
                <img className="hero__logo" src="images/logo-packmytrip.svg" width="278" />
                <h2 className="hero__title">Automatic packing list based on your destination</h2>
            </div>


            <form action="/backpack" method="post" id="form">

                <div className="form__group">
                    <label className="form__label" for="destination">Where are you planning to travel to?</label>
                    <div className="form__input">
                        <span className="form__input__prefix">
                            <img src="images/icon-place.svg" width="24" />
                        </span>
                        <input className="form__input__field form-control" type="text" id="destination" name="destination" placeholder="e.g. São Paulo" required />
                        <input hidden type="text" id="destination_lat" name="destination_lat" />
                        <input hidden type="text" id="destination_lng" name="destination_lng" />
                    </div>
                </div>

                <div className="form__group">
                    <fieldset>
                        <legend className="form__label">When?</legend>
                        <div className="form__dateset">
                            <div className="form__input">
                                <span className="form__input__prefix">From</span>
                                <input className="form__input__field is-date form-control" type="date" id="date_start" name="date_start" placeholder="yyyy-mm-dd" required />
                            </div>
                            <div className="form__input">
                                <span className="form__input__prefix">To</span>
                                <input className="form__input__field is-date form-control" type="date" id="date_end" name="date_end" placeholder="yyyy-mm-dd" required />
                            </div>
                        </div>
                    </fieldset>
                </div>

                <div className="form__group">
                    <label className="form__label" for="gender">Your type of underwear is...</label>
                    <div className="form__input">
                        <span className="form__input__prefix"><img src="images/icon-gender.svg" width="24" /></span>
                        <select className="form__input__field is-select" id="gender" name="gender" required>
                            <option value="girl">Girl's panties</option>
                            <option value="boy">Boy's underwear</option>
                        </select>
                    </div>
                </div>

                <hr />

                <button className="form__submit" type="submit">Sort my backpack!</button>
            </form>
        </main>
    )
}