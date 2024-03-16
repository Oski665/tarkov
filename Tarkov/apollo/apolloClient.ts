import {ApolloClient, InMemoryCache, HttpLink} from '@apollo/client';

const httpLink = new HttpLink({
  uri: 'https://api.tarkov.dev/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
