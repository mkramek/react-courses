import React, { Component } from 'react';

export default class UncontrolledForm extends Component {
    handleSubmit = (ev) => {
        ev.preventDefault();
        const form = ev.currentTarget;
        const login = form.elements.login.value;
        const password = form.elements.password.value;
        alert(`Formularz zawiera login: [${login}] i hasło: [${password}]`);
        form.reset();
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="login" placeholder="Login" />
                <input type="password" name="password" placeholder="Hasło" />
                <button type="submit">Zaloguj</button>
            </form>
        );
    }
}
