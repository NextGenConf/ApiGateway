import { ApolloServer } from 'apollo-server';
import { ConferencesApi, SessionsApi } from './data';
import resolvers from './resolvers';
import typeDefs from './typeDefs';

let conferencesBaseUrl = "http://localhost:5000";
if (process.env.CONFERENCES_BASE_URL)
{
  conferencesBaseUrl = process.env.CONFERENCES_BASE_URL;
}

let sessionsBaseUrl = "http://localhost:5001";
if (process.env.SESSIONS_BASE_URL)
{
  sessionsBaseUrl = process.env.SESSIONS_BASE_URL;
}

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      conferencesApi: new ConferencesApi(conferencesBaseUrl),
      sessionsApi: new SessionsApi(sessionsBaseUrl)
    }
  }
});

// The `listen` method launches a web server.
server.listen().then(({ url }: any) => {
  console.log(`Server ready at ${url}`);
});
