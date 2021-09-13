import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// Components //
import Seo from '../components/Seo';
import Quote from '../components/Quote';
import Loader from '../components/Loader';

// Styles //
import styles from '../styles/containers/SingleAuthor.module.scss';

// Helpers //
import { replaceHyphen } from '../utils/helpers';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

// API //
const baseURL = `https://quote-garden.herokuapp.com/api/v3/`;

const SingleAuthor = () => {
    const [quotes, setQuotes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { name } = useParams();
    const authorName = replaceHyphen(name, ' ');

    useEffect(() => {
        getQuotes();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getQuotes = async () => {
        setIsLoading(true);
        try {
            const { data } = await axios.get(
                `${baseURL}quotes?author=${authorName}`
            );
            setQuotes(data.data);
        } catch (error) {
            console.log(error);
        }
        setIsLoading(false);
    };
    return (
        <React.Fragment>
            <Seo title={`Random Quote Generator | ${authorName}`} />
            <div className={styles.container}>
                <span className={styles.back}>
                    <Link to="/">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 0 24 24"
                            width="24px"
                        >
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z" />
                        </svg>
                    </Link>
                </span>
                <main className={styles.main}>
                    <div className={styles.authorContent}>
                        <h2>{authorName}</h2>
                        {quotes &&
                            quotes.map(({ _id, quoteText }) => (
                                <Quote key={_id} text={quoteText} />
                            ))}
                        {isLoading && <Loader />}
                    </div>
                </main>
            </div>
        </React.Fragment>
    );
};

export default SingleAuthor;
