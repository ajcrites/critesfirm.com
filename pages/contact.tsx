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
        <title>Title: The Crites Firm - Atlanta Family Law Attorneys</title>
        <meta name="description" content="We are experienced family law attorneys serving Atlanta and the metro area. Call today or schedule an appointment online to get started." />
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
