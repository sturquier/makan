import { ApolloClient, InMemoryCache } from '@apollo/client';

export const GraphQLClient = new ApolloClient({
  uri: import.meta.env.VITE_HASURA_ROOT_ENDPOINT,
  cache: new InMemoryCache(),
  headers: {
    'content-type': 'application/json',
    'x-hasura-admin-secret': import.meta.env.VITE_HASURA_ADMIN_SECRET ?? ''
  }
});