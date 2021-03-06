import React from 'react';

// Styles //
import styles from '../styles/components/AuthorQuote.module.scss';

const AuthorQuote = ({ name, genre }) => {
    return (
        <div className={styles.wrapperAuthor}>
            <div className={styles.quoteAuthor}>
                <h2> {name} </h2>
                <span> {genre} </span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z" />
                </svg>
            </div>
        </div>
    );
};

export default AuthorQuote;
