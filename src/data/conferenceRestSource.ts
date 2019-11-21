import { RESTDataSource } from 'apollo-datasource-rest';

export class ConferencesApi extends RESTDataSource {
  constructor(baseUrl: string) {
    super();
    this.baseURL = baseUrl;
  }

  async getConference(uniqueName: string) {
    return this.get(`conference/${uniqueName}`);
  }

  async getConferences() {
    return this.get(`conference`);
  }
}
