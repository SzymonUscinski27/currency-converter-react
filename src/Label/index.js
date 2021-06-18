import "./style.css";

const Label = () => (
    <>
        <p>
            <label>
                <span className="form__labelText">Kwota w PLN* : </span>
                <input className="form__input" type="number" min="10" step="any" required />
            </label>
        </p>
        <p>
            <label>
                <span className="form__labelText">Wybierz walutę :</span>
                <select className="form__input" name="currency">
                    <option value="EUR">EUR</option>
                    <option value="USD">USD</option>
                    <option value="GBP">GBP</option>
                </select>
            </label>
        </p>
    </>
);

export default Label;