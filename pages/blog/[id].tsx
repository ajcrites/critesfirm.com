import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { sanitize } from 'isomorphic-dompurify';

import styles from '../../styles/Home.module.css'
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

import { blogPosts, BlogPost } from '../../components/blog/blog-posts';

export const getStaticPaths: GetStaticPaths = () => (
  {
    paths: blogPosts.map(({ id }) => ({
      params: { id }
    })),
    fallback: false,
  }
);

export const getStaticProps: GetStaticProps = ({ params: { id: teamMemberId } = {} }) => ({
  props: blogPosts.find(({ id }) => id === teamMemberId) || {},
});

const Blog: NextPage<BlogPost> = ({ title, content } ) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <main>
        <Header />

        <section>
          <h1 className={styles.pageTitle}>{title}</h1>

          <article className={styles.blogContents}>
            {content.map((paragraph, idx) => (
              <p key={idx} dangerouslySetInnerHTML={{
                __html: sanitize(paragraph, { ALLOWED_TAGS: ['b', 'a'], ADD_ATTR: ['target', 'rel'] })
              }}></p>
            ))}
          </article>
        </section>

        <Footer />
      </main>
    </>
  )
}

export default Blog;
