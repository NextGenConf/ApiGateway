import { UserInputError } from "apollo-server";
import {
  ConferenceAPI,
  Conference
} from "../servicesAPIs/conference/definition";

const root = {
  Query: {
    conferences: async (
      _: any,
      __: any,
      ctx: { dataSources: { conferenceAPI: ConferenceAPI } }
    ) => await ctx.dataSources.conferenceAPI.getConferences(),
    conference: async (
      _: any,
      args: { uniqueName: string },
      ctx: { dataSources: { conferenceAPI: ConferenceAPI } }
    ) => {
      const conference = await ctx.dataSources.conferenceAPI.getConference(
        args.uniqueName
      );
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
    newConference: async (
      _: any,
      args: { input: Conference },
      ctx: { dataSources: { conferenceAPI: ConferenceAPI } }
    ) => {
      return await ctx.dataSources.conferenceAPI.createConference(args.input);
    },
    updateConference: async (
      _: any,
      args: { input: Partial<Conference> },
      ctx: { dataSources: { conferenceAPI: ConferenceAPI } }
    ) => {
      return await ctx.dataSources.conferenceAPI.updateConference(args.input);
    }
  }
};

export { root };
