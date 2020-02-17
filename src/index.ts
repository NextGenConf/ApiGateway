import { ApolloServer } from "apollo-server";
import { root as typeDefs } from "./typeDefs";
import { root as resolvers } from "./resolvers";
import { MockConferenceAPI } from "./servicesAPIs/conference/apiMock";
import { ConferenceApi } from "./servicesAPIs/conference/api";

let conferenceAPI : ConferenceApi | MockConferenceAPI;

if (process.env.CONFERENCE_API_URL) {
  console.log(`Using conference API at ${process.env.CONFERENCE_API_URL}`);
  conferenceAPI = new ConferenceApi(process.env.CONFERENCE_API_URL);
} else {
  console.log(`Using Mock conference API`);
  conferenceAPI = new MockConferenceAPI();
}
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({ conferenceAPI: conferenceAPI })
});

process.on("SIGINT", () => {
  process.exit();
});

// The `listen` method launches a web server.
server.listen().then(({ url }: any) => {
  console.log(`Server ready at ${url}`);
});
