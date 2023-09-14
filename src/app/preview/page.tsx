"use client";

import styles from "../../globalStyles/page.module.scss";
import React, { Suspense } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { Post } from "@/components";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function App({ searchParams }: Props) {
  return (
    <main className={styles.main}>
      <h1>zawatech.com</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <PreviewPage searchParams={searchParams} />
      </Suspense>
    </main>
  );
}

function PreviewPage({ searchParams }: Props) {
  const postId: string = searchParams["p"]?.toString() ?? "0";

  const { data: session } = useSession();

  console.log(postId);

  return (
    <div>
      <div>
        {!session && <button onClick={() => signIn()}>Sign In</button>}
        {session && <button onClick={() => signOut()}>Sign Out</button>}
      </div>
      {session && session.user?.role === "admin" && <Post postId={postId} />}
    </div>
  );
}
