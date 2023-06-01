import React, { Component } from 'react';

export default class ArticleList extends Component {

    static defaultProps = {
        articles: []
    }

    render() {
        return (
            <ul>
                {this.props.articles.map(({ objectID, url, title }) => (
                    <li key={objectID}>
                        <a href={url} target="_blank" rel="noreferrer noopener">
                            {title}
                        </a>
                    </li>
                ))}
            </ul>
        );
    }
}
