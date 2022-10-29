import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import Head from 'next/head';

const firebaseConfig = {
  apiKey: "AIzaSyAX29XwaFXPxuw2HJX07L_X3Qb4_i0GKbg",
  projectId: "critesfirmcom",
  appId: "1:741886314396:web:e805a3a401dd613ae92a59",
};

const app = initializeApp(firebaseConfig);
if (process.env.NEXT_PUBLIC_HAS_ANALYTICS) {
  (async () => {
    if (await isSupported()) {
      getAnalytics(app);
    }
  })();
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
