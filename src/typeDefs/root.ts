import { gql } from "apollo-server";

const root = gql`
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

export default root;
