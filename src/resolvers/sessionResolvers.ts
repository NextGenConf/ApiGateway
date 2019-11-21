export default {
  Query: {
    getAllSessions: (_parent: any, _args: any, { dataSources }: any) => {
      return dataSources.sessionsApi.getAllSessions();
    },
    getSession: (_parent: any, args: any, { dataSources }: any) => {
      return dataSources.sessionsApi.getSession(args.uniqueName);
    }
  },
};
