import React, { Component } from 'react';
import PropTypes from 'prop-types';

// ====================== Komponent klasowy ====================== //
// Będąc pierwszą strukturą w React przed komponentem funkcyjnym,  //
// komponent klasowy wspierał atrybuty i stany od samego początku. //
// Później został on zastąpiony komponentami funkcyjnymi           //
// i hookami, jednak jest on wciąż spotykany w wielu aplikacjach.  //
// =============================================================== //

export default class ES6Welcome extends Component {
    // WAŻNE: według obecnej dokumentacji,
    // constructor(props), który zawiera w sobie tylko super(props), jest *niepotrzebny*,
    // toteż nie ma go w tym komponencie.

    // defaultProps odpowiada za domyślne atrybuty komponentu - używane są w sytuacji,
    // gdy wywołując komponent nie przypiszemy mu żadnych atrybutów.
    static defaultProps = {
        name: 'a small thought of pushing forward',
    };

    // Funkcja render odpowiada za wyświetlenie zawartości.
    render() {
        return <p>Welcome, {this.props.name}!</p>;
    }
}

// Jedną z metod definiowania typów atrybutów dla komponentu jest użycie
// propTypes - w tym przypadku zostaje wykorzystana biblioteka `prop-types`
// w celu dokładnego określenia typów atrybutów bez potrzeby użycia TypeScripta.
ES6Welcome.propTypes = {
    name: PropTypes.string
}
