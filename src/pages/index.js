import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Components //
import Seo from '../components/Seo';
import Quote from '../components/Quote';
import AuthorQuote from '../components/AuthorQuote';
import Random from '../components/Random';
import Loader from '../components/Loader';

// Styles //
import styles from '../styles/pages/Home.module.scss';

// Helpers //
import { removeSpecialCharacters } from '../utils/helpers';

// API //
const baseURL = `https://quote-garden.herokuapp.com/api/v3/quotes/random`;

export default function Home() {
    const [quote, setQuote] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [author, setAuthor] = useState('');

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
                                    const cleanAuthorName =
                                        removeSpecialCharacters(quoteAuthor);
                                    return (
                                        <Quote key={_id} text={quoteText}>
                                            <Link
                                                href={`/authors/${cleanAuthorName}`}
                                            >
                                                <a>
                                                    <AuthorQuote
                                                        name={quoteAuthor}
                                                        genre={quoteGenre}
                                                    />
                                                </a>
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
}
