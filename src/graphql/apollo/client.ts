import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';

const link = createHttpLink({
  uri: 'http://localhost:4003/',
  credentials: 'include',
});
export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});
