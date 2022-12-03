import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image';

import styles from '../../styles/Home.module.css'
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

import { practiceAreasData, PracticeAreasData } from '../../components/practice-areas/practice-areas-data';

export const getStaticPaths: GetStaticPaths = () => (
  {
    paths: practiceAreasData.map(({ id }) => ({
      params: { id }
    })),
    fallback: false,
  }
);

export const getStaticProps: GetStaticProps = ({ params: { id: teamMemberId } = {} }) => ({
  props: practiceAreasData.find(({ id }) => id === teamMemberId) || {},
});

const Bio: NextPage<PracticeAreasData> = ({ title, contents, image } ) => {
  return (
    <>
      <Head>
        <title>{`The Crites Firm Practice Areas - ${title}`}</title>
      </Head>

      <main>
        <Header />

        <section>
          <h1 className={styles.pageTitle}>{title}</h1>

          <article className={styles.bioContents}>
            <Image src={image} alt={`${title}`} />
            {contents.map((content, idx) =>
              <p key={idx}>
                {content}
              </p>
            )}
          </article>
        </section>

        <Footer />
      </main>
    </>
  )
}

export default Bio;

