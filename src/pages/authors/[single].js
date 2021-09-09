import React from 'react';
import axios from 'axios';

// Components //
import Seo from '../../components/Seo';
import Quote from '../../components/Quote';

// Styles //
import styles from '../../styles/pages/Single.module.scss';

// Helpers //
import { replaceWhiteSpaces, replaceHyphen } from '../../utils/helpers';

const baseURL = `https://quote-garden.herokuapp.com/api/v3/`;

export const getStaticPaths = async () => {
    const { data } = await axios.get(`${baseURL}authors`);
    const paths = data.data.map((item) => {
        let pathnames = replaceWhiteSpaces(item, '-');
        return {
            params: {
                single: pathnames.toString(),
            },
        };
    });
    return {
        paths: paths,
        fallback: false,
    };
};

export const getStaticProps = async (context) => {
    const authorName = replaceHyphen(context.params.single, ' ');
    const { data } = await axios.get(`${baseURL}quotes?author=${authorName}`);
    return {
        props: {
            author: {
                authorName: authorName,
                data: data,
            },
        },
    };
};

const Single = ({ author }) => {
    const { authorName, data } = author;
    return (
        <React.Fragment>
            <Seo title={`Random Quote Generator | ${authorName}`} />
            <div className={styles.container}>
                <div className={styles.authorContent}>
                    <h2>{authorName}</h2>
                    {data.data.map(({ _id, quoteText }) => (
                        <Quote key={_id} text={quoteText} />
                    ))}
                </div>
            </div>
        </React.Fragment>
    );
};

export default Single;
