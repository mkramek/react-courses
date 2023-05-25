import { Component } from "react";
import ControlledForm from "./components/ControlledForm";
import UncontrolledForm from "./components/UncontrolledForm";

export default class App extends Component {
    state = {
        formData: {}
    }

    handleFormSubmit = (form) => {
        this.setState({ formData: form });
    }

    render() {
        return (
            <>
                {/* <UncontrolledForm /> */}
                <pre>{JSON.stringify(this.state.formData)}</pre>
                <ControlledForm onFormSubmit={this.handleFormSubmit} />
            </>
        );
    }
}
