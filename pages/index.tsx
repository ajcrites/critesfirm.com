import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>The Crites Firm</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
          <section className={styles.content}>
            <h1 className={styles.info}>
              Atlanta Divorce &amp; Domestic Relations Litigation Group
            </h1>
            <p className={styles.schedule}>
              <a rel="noreferrer" target="_blank" href="https://critesfirm.cliogrow.com/book/47b4d8dfb1601a4e7665eacd954995c8">
                Schedule a consultation
              </a>
            </p>
          </section>
        <Footer />
      </main>
    </>
  )
}

export default Home
