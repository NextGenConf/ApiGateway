import { ApolloServer } from "apollo-server";
import { root as typeDefs } from "./typeDefs";
import { root as resolvers } from "./resolvers";
import { MockConferenceAPI } from "./servicesAPIs/conference/mockAPI";

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({ conferenceAPI: new MockConferenceAPI() })
});

process.on("SIGINT", () => {
  process.exit();
});

// The `listen` method launches a web server.
server.listen().then(({ url }: any) => {
  console.log(`Server ready at ${url}`);
});
