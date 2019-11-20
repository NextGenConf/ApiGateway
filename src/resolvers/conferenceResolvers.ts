export default {
  Query: {
    conferences: (_source: any, _: any, { dataSources }: any) => {
      return dataSources.conferencesApi.getConferences();
    },
  },
};
