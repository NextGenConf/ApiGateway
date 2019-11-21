import { ApolloServer } from 'apollo-server';
import { ConferencesApi } from './data';
import resolvers from './resolvers';
import typeDefs from './typeDefs';

let baseUrl = "http://localhost:3000";
if (process.env.CONFERENCES_BASE_URL)
{
  baseUrl = process.env.CONFERENCES_BASE_URL;
}

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      conferencesApi: new ConferencesApi(baseUrl)
    }
  }
});

// The `listen` method launches a web server.
server.listen().then(({ url }: any) => {
  console.log(`Server ready at ${url}`);
});
