import { Fragment } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import styles from '../styles/Home.module.css'
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { practiceAreasData } from '../components/practice-areas/practice-areas-data';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>The Crites Firm Practice Areas</title>
      </Head>

      <main>
        <Header />

        <section>
          <h1 className={styles.pageTitle}>
            Practice Areas
          </h1>

          <article className={styles.bioContents}>
            {practiceAreasData.map(({ id, title }) =>
              <Link href={`/practice-areas/${id}`} key={id}>
                <a><h2>{title}</h2></a>
              </Link>
            )}
          </article>
        </section>

        <Footer />
      </main>
    </>
  )
}

export default Home

