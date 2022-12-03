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

const Bio: NextPage<PracticeAreasData> = ({ pageTitle, metaTitle, contents, description, image } ) => {
  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content="{description}" />
      </Head>

      <main>
        <Header />

        <section>
          <h1 className={styles.pageTitle}>{pageTitle}</h1>

          <article className={styles.bioContents}>
            <div style={{float: 'left', margin: '5px 10px 0 0', }}>
              <Image src={image} alt={pageTitle} width={200} height={200} />
            </div>
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

