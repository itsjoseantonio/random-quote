import Route from 'next/router';

// Components//
import ProgressBar from '@badrap/bar-of-progress';

// Styles //
import '../styles/global/index.scss';

const progress = new ProgressBar({
    size: 2,
    color: '#f7df94',
    delay: 100,
});

// Router events
Route.events.on('routeChangeStart', progress.start);
Route.events.on('routeChangeComplete', progress.finish);
Route.events.on('routeChangeError', progress.finish);

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

export default MyApp;
