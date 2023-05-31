import { Component } from "react";

export default class ContactForm extends Component {
    constructor(props) {
        super(props);
        console.info("[ContactForm] Konstruktor");
    }

    state = {
        phone: "",
        email: ""
    }

    handleChange = ({ target }) => {   // event => target, currentTarget, ... => name, value
        const { name, value } = target;
        this.setState({ [name]: value });
    }

    componentDidMount() {
        console.info("[ContactForm] Montowanie");
    }

    componentDidUpdate() {
        console.info("[ContactForm] Aktualizacja");
    }

    componentWillUnmount() {
        console.info("[ContactForm] Odmontowanie");
    }

    render() {
        return <form onSubmit={void(0)}>
            <input type="text" name="phone" onChange={this.handleChange} />
            <input type="text" name="email" onChange={this.handleChange} />
            <button type="submit">Wyślij formularz</button>
        </form>
    }
}
