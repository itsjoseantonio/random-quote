import React from 'react';

export const getStaticProps = async (context) => {
    const xd = context.params;
    return {
        props: {
            data: xd,
        },
    };
};

export const getStaticPaths = async () => {
    return {
        paths: [],
        fallback: 'blocking',
    };
};

const Single = ({ data }) => {
    console.log(data);
    return (
        <div>
            <span>Single</span>
        </div>
    );
};

export default Single;
