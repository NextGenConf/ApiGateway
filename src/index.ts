import { ApolloServer, UserInputError, gql } from "apollo-server";
import Conference from "./models/conference";
import {
  getConferences,
  getConference,
  createConference,
  updateConference
} from "./fetchData/conference";

const typeDefs = gql`
  type Query {
    conferences: [Conference]!
    conference(uniqueName: String!): Conference!
  }

  type Mutation {
    newConference(input: NewConferenceInput): Conference!
    updateConference(input: UpdateConferenceInput): Conference!
  }
  type Conference {
    uniqueName: String!
    displayName: String!
    description: String
  }

  input NewConferenceInput {
    uniqueName: String!
    displayName: String!
    description: String
  }

  input UpdateConferenceInput {
    uniqueName: String!
    displayName: String
    description: String
  }
`;

const devResolvers = {
  Query: {
    conferences: async () => await getConferences(),
    conference: async (_: any, args: { uniqueName: string }) => {
      const conference = await getConference(args.uniqueName);
      if (conference) {
        return conference;
      } else {
        throw new UserInputError(
          `Conference with uniqueName: ${args.uniqueName} does not exist`
        );
      }
    }
  },
  Mutation: {
    newConference: async (_: any, { input }: any) => {
      const newConference: Conference = {
        uniqueName: input.uniqueName,
        displayName: input.displayName,
        description: input.description
      };
      return await createConference(newConference);
    },
    updateConference: async (_: any, args: { input: Partial<Conference> }) => {
      return await updateConference(args.input);
    }
  }
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers: devResolvers
});

process.on("SIGINT", () => {
  process.exit();
});

// The `listen` method launches a web server.
server.listen().then(({ url }: any) => {
  console.log(`Server ready at ${url}`);
});
