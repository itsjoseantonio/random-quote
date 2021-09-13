import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// Components //
import Seo from '../components/Seo';
import Quote from '../components/Quote';
import AuthorQuote from '../components/AuthorQuote';
import Random from '../components/Random';
import Loader from '../components/Loader';

// Styles //
import styles from '../styles/containers/Home.module.scss';

// Helpers //
import { replaceWhiteSpaces } from '../utils/helpers';

// API //
const baseURL = `https://quote-garden.herokuapp.com/api/v3/quotes/random`;

const Home = () => {
    const [quote, setQuote] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        getRandomQuote();
    }, []);

    const getRandomQuote = async () => {
        setIsLoading(true);
        try {
            const { data } = await axios.get(baseURL);
            setQuote(data.data);
        } catch (error) {
            console.log(error);
        }
        setIsLoading(false);
    };

    return (
        <React.Fragment>
            <Seo />
            <div className={styles.container}>
                <main className={styles.main}>
                    <Random onClick={getRandomQuote} />
                    <div className={styles.wrapperQuote}>
                        {quote &&
                            quote.map(
                                ({
                                    _id,
                                    quoteText,
                                    quoteAuthor,
                                    quoteGenre,
                                }) => {
                                    const cleanAuthorName = replaceWhiteSpaces(
                                        quoteAuthor,
                                        '-'
                                    );
                                    return (
                                        <Quote key={_id} text={quoteText}>
                                            <Link
                                                to={`/authors/${cleanAuthorName}`}
                                            >
                                                <AuthorQuote
                                                    name={quoteAuthor}
                                                    genre={quoteGenre}
                                                />
                                            </Link>
                                        </Quote>
                                    );
                                }
                            )}
                        {isLoading && <Loader />}
                    </div>
                </main>
            </div>
        </React.Fragment>
    );
};

export default Home;
