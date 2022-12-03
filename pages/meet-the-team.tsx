import { Fragment } from 'react';
import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { teamData } from '../components/team/team-data';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>The Crites Firm - Experienced Atlanta Family Law Attorneys</title>
        <meta name="description" content="Our experienced Atlanta family law attorneys are available to assist you in understanding your rights and choices when it comes to all aspects of your case." />
      </Head>

      <main>
        <Header />

        <section>
          <h1 className={styles.pageTitle}>
            Meet The Team
          </h1>

          <ul className={styles.teamListContainer}>
            {teamData.map(({ id, name, bio, image }) => {
              const imageAltText = `${name}'s Bio Picture `;
              const link = `/team/${id}`;
              return (
                <li key={id} className={styles.teamList}>
                  <span className={styles.teamListImage}>
                    <Link href={link}>
                      <a><Image src={image} alt={imageAltText} height="135px" width="120px"/></a>
                    </Link>
                  </span>
                  <h2 className={styles.teamListHeader}>
                    <Link href={link}>
                      <a>{name}</a>
                    </Link>
                  </h2>
                  <p className={styles.teamListBio}>{bio.join().substr(0, 250)} &#8230;</p>
                  <span className={styles.teamListLink}>
                    <Link href={link}>Learn more »</Link>
                  </span>
                </li>
              )
            })}
          </ul>
        </section>

        <Footer />
      </main>
    </>
  )
}

export default Home

