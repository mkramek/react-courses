import React, { Component } from 'react';
import ES6Welcome from './components/ES6Welcome';
import FunctionalMailbox from './components/FunctionalMailbox';
import CatOrDog from './components/CatOrDog';

export default class App extends Component {
    render() {
        // Poniższa reprezentacja komponentów to tzw. JSX - jest to połączenie JavaScriptu i tagów znanych z HTMLa.
        // W póżniejszym etapie zostanie to przetworzone w toku budowania strony na kod zrozumiały przez przeglądarki.
        // Komentarze w środku JSXa muszą być tworzone w specyficzny sposób, na potrzeby poprawnej składni.
        return (
            <div>
                {/* ten komponent nie ma atrybutów */}
                <ES6Welcome />
                {/* ten komponent posiada atrybut - ponieważ zależy nam na wartości liczbowej, wartość atrybutu zawieramy w klamrach */}
                <FunctionalMailbox unreadCount={0} />
                {/* ten komponent posiada atrybut tekstowy, więc możemy go przedstawić w cudzysłowach, tak jak zwykły HTML */}
                <CatOrDog answer="cat" />
            </div>
        );
    }
}
