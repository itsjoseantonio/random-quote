import React from 'react';

// Styles //
import styles from '../styles/components/Quote.module.scss';

const Quote = ({ text, children }) => {
    return (
        <div className={styles.quote}>
            <p>{`"${text}"`}</p>
            {children}
        </div>
    );
};

export default Quote;
