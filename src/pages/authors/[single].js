import React from 'react';
import axios from 'axios';
import Link from 'next/link';

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
                <span className={styles.back}>
                    <Link
                        href={{
                            pathname: '/',
                        }}
                    >
                        <a>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="24px"
                                viewBox="0 0 24 24"
                                width="24px"
                            >
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z" />
                            </svg>
                        </a>
                    </Link>
                </span>
                <main className={styles.main}>
                    <div className={styles.authorContent}>
                        <h2>{authorName}</h2>
                        {data.data.map(({ _id, quoteText }) => (
                            <Quote key={_id} text={quoteText} />
                        ))}
                    </div>
                </main>
            </div>
        </React.Fragment>
    );
};

export default Single;
