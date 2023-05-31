import { Component } from "react";
import { nanoid } from "nanoid";

export default class NameForm extends Component {
    constructor(props) {
        super(props);
        console.info("[NameForm] Konstruktor");
    }

    state = {
        firstName: "",
        lastName: "",
        contractWithSatan: false
    }

    /*
     * handleChange = (ev) => {
     *     const { target } = ev;    -- wariant 1
     *     const target = ev.target; -- wariant 2
     *
     *     this.setState({ [target.name]: target.value });      -- dla wariantu 1 i 2
     *     this.setState({ [ev.target.name]: ev.target.value }) -- bez wariantu 1 ani 2
     * }
     */
    handleChange = ({ target }) => {
        const { type, name, value, checked } = target;
        if (type === "checkbox") {
            this.setState({ [name]: checked });
        } else {
            this.setState({ [name]: value });
        }
    }

    handleCheckboxReset = () => {
        this.setState({ contractWithSatan: false });
    }

    throwError = () => {
        throw new Error("Sztuczny błąd wygenerowany przez funkcję");
    }

    componentDidMount() {
        console.info("[NameForm] Montowanie");
    }

    shouldComponentUpdate(_, nextState) {
        if (nextState.contractWithSatan) {
            console.info("[NameForm] Blokada aktualizacji!");
            return false;
        } else {
            console.info("[NameForm] Aktualizacja dozwolona");
            return true;
        }
    }

    componentDidUpdate() {
        console.info("[NameForm] Aktualizacja");
    }

    componentWillUnmount() {
        console.info("[NameForm] Odmontowanie");
    }

    render() {
        const checkboxId = nanoid();

        return <form onSubmit={void(0)}>
            <input type="text" name="firstName" value={this.state.firstName} placeholder="Imię" onChange={this.handleChange} />
            <input type="text" name="lastName" value={this.state.lastName} placeholder="Nazwisko" onChange={this.handleChange} />
            <input type="checkbox" id={checkboxId} name="contractWithSatan" checked={this.state.contractWithSatan} onChange={this.handleChange} />
            <label htmlFor={checkboxId}>Czy chcesz sprzedać swoją duszę?</label>
            <button type="submit">Wyślij formularz</button>
            <button type="button" onClick={this.handleCheckboxReset}>Anuluj kontrakt</button>
            <button type="button" onClick={this.throwError}>Symuluj błąd</button>
        </form>
    }
}
