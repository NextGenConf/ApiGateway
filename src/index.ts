const https = require('https');
const { ApolloServer, gql } = require('apollo-server');
const { RESTDataSource } = require('apollo-datasource-rest');

class ConferencesApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:3000/';
  }

  async getConference(uniqueName: string) {
    return this.get(`conferences/${uniqueName}`);
  }

  async getConferences() {
    return this.get(`conferences`);
  }
}

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Conference {
    uniqueName: String
    displayName: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    conferences: [Conference]
  }
`;

const conferences = [
  {
    "uniqueName": "test-conf-1",
    "displayName": "Test Conference One"
  },
  {
    "uniqueName": "test-conf-2",
    "displayName": "Test Conference Two"
  }
];

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    conferences: (_source: any, _: any, { dataSources }: any) => {
      return dataSources.conferencesApi.getConferences();
    },
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      conferencesApi: new ConferencesApi()
    }
  }
});

// The `listen` method launches a web server.
server.listen().then(({ url }: any) => {
  console.log(`Server ready at ${url}`);
});
