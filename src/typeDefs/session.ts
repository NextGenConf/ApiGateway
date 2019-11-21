import { gql } from 'apollo-server';

export default gql`
  type Session {
    uniqueName: String
    title: String
    description: String
    subtitle: String
    presenterId: String
    slideDeckUrl: String
    location: String
  }
`;
