import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>The Crites Firm</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <section className={styles.contactContent}>
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScF4E7z7Iuisa4dHRRHo2UaoVg5AUYaAIDa27V6Yv0JnFknZA/viewform?embedded=true" width="640" height="830" frameBorder="0" marginHeight={0} marginWidth={0}>Loading Contact Form</iframe>
      </section>
      <Footer />
    </>
  )
}

export default Contact;
