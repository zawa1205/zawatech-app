import React from "react";
import { NextAuthProvider } from "@/providors/NextAuth";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import style from "../globalStyles/page.module.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OGP Server",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
