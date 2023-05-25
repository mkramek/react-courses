import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CatOrDog extends Component {
    static defaultProps = {
        answer: 'cat',
    };

    render() {
        return <p>I'm sure this is a {this.props.answer}.</p>;
    }
}

// Wykorzystując `prop-types`, możemy określić bardzo specyficzne typy atrybutów,
// umożliwiając dokładne określenie wartości dla komponentu.
CatOrDog.propTypes = {
    answer: PropTypes.oneOf(['cat', 'dog']),
};
