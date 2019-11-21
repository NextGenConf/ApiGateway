import { gql } from 'apollo-server';

export default gql`
  type Query {
    getConferences: [Conference]
    getConference(uniqueName: String): Conference
    getAllSessions: [Session]
    getSession(uniqueName: String): Session
  }
`;
