import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>The Crites Firm - Atlanta Family Law Attorneys</title>
        <meta name="description" content="Our talented Atlanta Divorce & Family Law Litigation attorneys handle divorce, narcissistic divorce, custody, paternity, prenuptial agreements, contempt, modification & more. Schedule your easy video consultation today." />
      </Head>

      <main>
        <Header />

        <section className={[styles.content, styles.homePageContent].join(' ')}>
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
