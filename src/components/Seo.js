import Head from 'next/head';
import React from 'react';

const Seo = ({
    title = 'Random Quote Generator',
    description = 'Motivate yourself with many quotes from inspiring personalities',
    keywords = 'Quotes, inspiration, motivation',
}) => {
    const MetaDataFb = [
        {
            property: 'og:title',
            content: title,
        },
        {
            property: 'og:description',
            content: description,
        },
        {
            property: 'og:type',
            content: 'website',
        },
        {
            property: 'og:url',
            content: '',
        },
        {
            property: 'og:image',
            content: '',
        },
    ];
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="theme-color" content={''} />
            {MetaDataFb.map(({ property, content }, i) => (
                <meta key={i} property={property} content={content} />
            ))}
            <link rel="icon" href="/favicon.ico" />
            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/apple-touch-icon.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/favicon-32x32.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/favicon-16x16.png"
            />
        </Head>
    );
};

export default Seo;
