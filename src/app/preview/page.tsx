import styles from "../../styles/page.module.css";
import Head from "next/head";
import { GET_PREVIEW } from "@/graphql/queries";
import { getAuthClient } from "@/lib/apolloClient";
import { notFound } from "next/navigation";

type Post = {
  title: string;
};

type Props = {
  initialPosts: { title: "" };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function PreviewPage({
  initialPosts,
  searchParams,
}: Props) {
  const previewKey = searchParams["key"];
  const postId = searchParams["p"];

  if (previewKey !== process.env.PREVIEW_SECRET_KEY || !postId)
    return notFound();

  const baseUrl = "http://localhost:3000";

  const { data } = await getAuthClient.query({
    query: GET_PREVIEW,
    variables: { postId: postId },
  });
  // const { data } = await getClient().query({ query: GET_PREVIEW });

  const title = data?.post?.title || initialPosts;
  const content = data?.post?.content || "";

  return (
    <main className={styles.main}>
      <div>
        <Head>
          <title>Preview</title>
          <meta property="og:image" content={`${baseUrl}/api/og`} />
        </Head>
      </div>
      <h1>zawatech.com</h1>
      <h2>{title}（タイトル）</h2>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </main>
  );
}
