import Head from "next/head";
import ArticleList from "../components/ArticleList";
export default function Home({ articles }) {
  console.log(articles);
  return (
    <div>
      <Head>
        <title>WebDev</title>
      </Head>
      <ArticleList articles={articles} />

      <h1>welcome to next</h1>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=6`
  );
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
