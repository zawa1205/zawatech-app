import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    ssrMode: true,
    cache: new InMemoryCache(),
    link: new HttpLink({
      // this needs to be an absolute url, as relative urls cannot be used in SSR
      uri: "http://zawatech.verse.jp/graphql",
      // you can disable result caching here if you want to
      // (this does not work if you are rendering your page with `export const dynamic = "force-static"`)
      fetchOptions: { cache: "no-store" },
      credentials: "include",
      // headers: {
      //   "Content-Type": "application/json",
      //   Authorization: `Bearer ${process.env.REFRESH_TOKEN}`,
      // },
    }),
  });
});

export const getAuthClient = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      // this needs to be an absolute url, as relative urls cannot be used in SSR
      uri: "http://zawatech.verse.jp/graphql",
      // you can disable result caching here if you want to
      // (this does not work if you are rendering your page with `export const dynamic = "force-static"`)
      // fetchOptions: { cache: "no-store" },
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: process.env.REFRESH_TOKEN
          ? `Bearer ${process.env.REFRESH_TOKEN}`
          : "",
      },
    }),
  });
}).getClient();
