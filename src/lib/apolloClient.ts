import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
// import { HYGRAPH_URL, HYGRAPH_PERMANENTAUTH_TOKEN } from "../lib/constants";
// import { setContext } from "@apollo/client/link/context";
const URL = "http://localhost:4000/graphql";
const httpLink = createHttpLink({
  uri: URL,
});

// const authLink = setContext((_, { headers }) => {
//   return {
//     headers: {
//       ...headers,
//       authorization: `Bearer ${HYGRAPH_PERMANENTAUTH_TOKEN}`,
//     },
//   };
// });

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
