import { gql } from 'apollo-server';

export default gql`
  type Address {
    addressLine: String
    city: String
    country: String
    postalCode: String
  }

  type Venue {
    name: String
    address: Address
  }

  type Conference {
    uniqueName: String
    displayName: String
    iconUri: String
    description: String
    subtitle: String
    startDate: String
    endDate: String
    venue: Venue
  }
`;
