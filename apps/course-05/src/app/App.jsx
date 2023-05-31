import { Component } from "react";
import NameForm from "./components/NameForm";
import ContactForm from "./components/ContactForm";

export default class App extends Component {
    constructor(props) {
        super(props);
        console.info("[App] Konstruktor");
    }

    componentDidMount() {
        console.info("[App] Montowanie");
    }

    state = {
        errorAppeared: true,
        error: undefined,
        formId: 1
    }

    changeForm = (newId) => () => {
        this.setState({ formId: newId });
    }

    componentDidCatch(error, info) {
        if (error) {
            console.info(`Złapano błąd! (${error})`);
        }
    }

    render() {
        return <>
            <button onClick={this.changeForm(1)}>Formularz 1</button>
            <button onClick={this.changeForm(2)}>Formularz 2</button>
            {this.state.formId === 1 ? <NameForm /> : <ContactForm />}
        </>
    }
}
