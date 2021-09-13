// Components//
// import ProgressBar from '@badrap/bar-of-progress';

// Styles //
import '../styles/global/index.scss';

// const progress = new ProgressBar({
//     size: 2,
//     color: '#f7df94',
//     delay: 100,
// });

// Router events
// Route.events.on('routeChangeStart', progress.start);
// Route.events.on('routeChangeComplete', progress.finish);
// Route.events.on('routeChangeError', progress.finish);


import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div suppressHydrationWarning>
            {typeof window === 'undefined' ? null : (
                <Component {...pageProps} />
            )}
        </div>
    );
}

export default MyApp;
