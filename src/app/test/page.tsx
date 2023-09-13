"use client";

import styles from "../../styles/page.module.css";
import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/react";

type Post = {
  id: string;
  title: string;
};

type Props = {
  initialPosts: Post[];
};

export default function Home() {
  const baseUrl = "http://localhost:3000";

  const { data: session } = useSession();

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
        <p>
          <code className="font-mono font-bold">
            {session?.user?.name ?? "guest"}
            <br />
            {session?.user?.role ?? "role"}
          </code>
        </p>
        <div>
          {!session && <button onClick={() => signIn()}>Sign In</button>}
          {session && <button onClick={() => signOut()}>Sign Out</button>}
        </div>
      </div>
    </main>
  );
}
