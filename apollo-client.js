// // ./apollo-client.js
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const link = new HttpLink({
    uri: "https://graphql.contentstack.com/stacks/bltedc4e98242187870?environment=dev",
    fetch: fetch,
    headers: {
        access_token: 'cs79e999f5b1783045ad6f5b65'
    },
  });

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link
});

export default client