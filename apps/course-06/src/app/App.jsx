import React, { Component } from 'react';
import ArticleList from './components/ArticleList';
import api from './services/api';
import { nanoid } from 'nanoid';

export default class App extends Component {
    state = {
        query: '',
        loading: false,
        articles: [],
        error: null,
        title: '',
    };

    handleSubmit = (ev) => {
        ev.preventDefault();
        this.getArticles(this.state.query);
    };

    handleChange = (ev) => {
        const { name, value } = ev.target;
        this.setState({ [name]: value });
    };

    getArticles = async (query) => {
        this.setState({ loading: true });
        try {
            const articles = await api.fetchArticlesWithQuery(query);
            const title = `Wyniki dla zapytania: '${query}'`;
            this.setState({ articles, title });
        } catch (err) {
            this.setState({ error: err });
        } finally {
            this.setState({ loading: false });
        }
    };

    componentDidMount() {
        this.getArticles('HTML');
    }

    render() {
        const inputId = nanoid();
        const { articles, loading, error, query, title } = this.state;
        let content = null;
        if (loading) {
            content = <p>Ładowanie artykułów...</p>;
        } else {
            if (error !== null) {
                content = <p>Wystąpił błąd ({error})</p>;
            } else if (!articles.length) {
                content = <p>Brak artykułów</p>;
            } else {
                content = (
                    <>
                        <h1>{title}</h1>
                        <ArticleList articles={articles} />
                    </>
                );
            }
        }
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor={inputId}>Słowo kluczowe</label>
                    <br />
                    <input type="text" name="query" value={query} id={inputId} onChange={this.handleChange} />
                    <br />
                    <button type="submit">Otrzymaj listę artykułów</button>
                </form>
                {content}

                {/* {articles.length && !loading ? <h1>{title}</h1> : null}
                {loading && <p>Ładowanie artykułów</p>}
                {error !== null && <p>Wystąpił błąd</p>}
                {!articles.length && !loading ? <p>Brak artykułów</p> : loading ? null : <ArticleList articles={articles} />}
                {articles.length && loading ? null : <ArticleList articles={articles} />} */}

                {/* {articles.length > 0 ? <ArticleList articles={articles} /> : <p>Brak artykułów</p>} */}

                {/* {loading ? (
                    <p>Ładowanie artykułów...</p>
                ) : error !== null ? (
                    <p>Wystąpił błąd: {error}</p>
                ) : articles.length > 0 ? (
                    <ArticleList articles={articles} />
                ) : (
                    <p>Brak artykułów</p>
                )} */}
            </div>
        );
    }
}
