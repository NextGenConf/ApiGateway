import { gql } from 'apollo-server';

export default gql`
  type Conference {
    uniqueName: String
    displayName: String
  }
`;
