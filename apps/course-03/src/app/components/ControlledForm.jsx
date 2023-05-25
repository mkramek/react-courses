import React, { Component } from 'react';
import { nanoid } from 'nanoid';

export default class ControlledForm extends Component {
    state = {
        login: '',
        password: '',
        remember: false,
        serverId: 1
    };

    handleSubmit = (ev) => {
        ev.preventDefault();
        alert(`Logowanie na serwer [${this.state.serverId}] - login: [${this.state.login}] i hasło: [${this.state.password}]; Zapamiętywanie jest ${this.state.remember ? "włączone" : "wyłączone"}`);
        this.props.onFormSubmit({ ...this.state });
    };

    /***** w przypadku, gdy name z pola formularza nie zgadza się z elementami w state
    handleInput = (inputName) => (ev) => {
        this.setState({
            [inputName]: ev.target.value,
        });
    };
    ******/

    handleInput = (ev) => {
        const { name, value } = ev.target;
        this.setState({ [name]: value });
    }

    handleCheckbox = (ev) => {
        this.setState({ remember: ev.target.checked });
    }

    /*
    handleLoginChange = (ev) => {
        this.setState({ login: ev.target.value });
    }

    handlePasswordChange = (ev) => {
        this.setState({ password: ev.target.value });
    }
    */

    render() {
        const loginInputId = nanoid();
        const passwordInputId = nanoid();
        const rememberInputId = nanoid();
        const serverInputId = nanoid();
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor={loginInputId}>Login</label>
                <input id={loginInputId} onChange={/* handleLoginChange */this.handleInput} value={this.state.login} type="text" name="login" />
                <br />
                <label htmlFor={passwordInputId}>Hasło</label>
                <input id={passwordInputId} onChange={/* handlePasswordChange */this.handleInput} value={this.state.password} type="password" name="password" />
                <br />
                <label htmlFor={rememberInputId}>Pamiętaj</label>
                <input id={rememberInputId} onChange={this.handleCheckbox} checked={this.state.remember} type="checkbox" name="remember" />
                <br />
                <label htmlFor={serverInputId}>Serwer</label>
                <select id={serverInputId} onChange={this.handleInput} value={this.state.serverId} name="serverId">
                    <option value={1}>Serwer 1</option>
                    <option value={2}>Serwer 2</option>
                    <option value={3}>Serwer 3</option>
                </select>
                <br />
                <button type="submit">Zaloguj</button>
            </form>
        );
    }
}
