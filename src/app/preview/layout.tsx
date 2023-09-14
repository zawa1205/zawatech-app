"use client";
import React from "react";
import { ApolloWrapper } from "@/lib/apolloClientSSR";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ApolloWrapper>{children}</ApolloWrapper>;
}
