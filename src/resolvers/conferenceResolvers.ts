export default {
  Query: {
    getConferences: (_parent: any, _args: any, { dataSources }: any) => {
      return dataSources.conferencesApi.getConferences();
    },
    getConference: (_parent: any, args: any, { dataSources }: any) => {
      return dataSources.conferencesApi.getConference(args.uniqueName);
    }
  },
};
