"use client";

import React from "react";
import { setContext } from "@apollo/client/link/context";
import { HttpLink } from "@apollo/client";
import {
  ApolloNextAppProvider,
  NextSSRApolloClient,
  NextSSRInMemoryCache,
} from "@apollo/experimental-nextjs-app-support/ssr";

export const getAuthClientSSR = () => {
  const httpLink = new HttpLink({
    uri: "http://zawatech.verse.jp/graphql",
  });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: process.env.NEXT_PUBLIC_REFRESH_TOKEN
          ? `Bearer ${process.env.NEXT_PUBLIC_REFRESH_TOKEN}`
          : "",
      },
    };
  });

  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link: authLink.concat(httpLink),
    credentials: "include",
  });
};

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={getAuthClientSSR}>
      {children}
    </ApolloNextAppProvider>
  );
}
