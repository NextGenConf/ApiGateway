import { RESTDataSource } from "apollo-datasource-rest";
import { ConferenceAPI, Conference } from "./definition";

export class ConferenceApi extends RESTDataSource implements ConferenceAPI {
  constructor(conferenceServiceUrl: string) {
    super();
    if (!conferenceServiceUrl.endsWith("/")) {
      conferenceServiceUrl = conferenceServiceUrl + "/";
    }
    this.baseURL = conferenceServiceUrl;
  }

  public getConferences = (): Promise<Conference[]> => {
    throw new Error("Method not implemented.");
  };

  async getConference(uniqueName: string): Promise<Conference> {
    const conference = await this.get<Conference>(uniqueName);
    if (!conference) {
      throw new Error(
        `Could not get conference with uniqueName: ${uniqueName}`
      );
    }
    return conference;
  }
  async createConference(conference: Conference): Promise<Conference> {
    const createdConference = await this.post<Conference>(
      "",
      new Object({ ...conference })
    );
    if (!createdConference) {
      throw new Error(
        `Could not create conference ${JSON.stringify(conference)}`
      );
    }
    return createdConference;
  }

  updateConference(_: Partial<Conference>): Promise<Conference> {
    throw new Error("Method not implemented.");
  }
}
