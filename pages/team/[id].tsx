import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image';

import styles from '../../styles/Home.module.css'
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

import { teamData, TeamData } from '../../components/team/team-data';

export const getStaticPaths: GetStaticPaths = () => (
  {
    paths: teamData.map(({ id }) => ({
      params: { id }
    })),
    fallback: false,
  }
);

export const getStaticProps: GetStaticProps = ({ params: { id: teamMemberId } = {} }) => ({
  props: teamData.find(({ id }) => id === teamMemberId) || {},
});

const Bio: NextPage<TeamData> = ({ name, image, bio } ) => {
  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>

      <main>
        <Header />

        <section>
          <h1 className={styles.pageTitle}>{name}</h1>

          <article className={styles.bioContents}>
            <Image src={image} alt={`${name}'s bio pic`} width="200" height="250" />

            {bio.map((paragraph, idx) => <p key={idx}>{paragraph}</p>)}
          </article>
        </section>

        <Footer />
      </main>
    </>
  )
}

export default Bio;

