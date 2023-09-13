import styles from "../styles/page.module.css";
import Head from "next/head";
import { GET_POSTS } from "@/graphql/queries";
import { getClient } from "@/lib/apolloClient";
import Image from "next/image";

type Post = {
  id: string;
  title: string;
};

type Props = {
  initialPosts: Post[];
};

export default async function Home({ initialPosts }: Props) {
  const baseUrl = "http://localhost:3000";

  const { data } = await getClient().query({ query: GET_POSTS });
  const posts = data?.posts.edges.map(({ node }: any) => node) || initialPosts;

  return (
    <main className={styles.main}>
      <div>
        <Head>
          <title>Home</title>
          <meta property="og:image" content={`${baseUrl}/api/og`} />
        </Head>
      </div>
      <h1>zawatech.com</h1>
      <div>
        {posts.map((post: Post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <Image
              src={`${baseUrl}/api/og?title=${post.title}`}
              alt=""
              width={"400"}
              height={"200"}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
