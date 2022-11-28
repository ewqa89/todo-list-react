import "./style.css";

const Form = () => (
    <form className="form">
        <fieldset className="form__fildset">
        <input className="form__input" placeholder="Co jest do zrobienia?" autofocus 
        />
        <button type="submit" className="form__button">Dodaj zadanie</button>
        </fieldset>
    </form>
);

export default Form;