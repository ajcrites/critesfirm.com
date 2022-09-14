import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const Contact: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>The Crites Firm</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />
        THIS IS THE CONTACT PAGE
        <Footer />
      </main>
    </div>
  )
}

export default Contact;
