import { RESTDataSource } from 'apollo-datasource-rest';

export class ConferencesApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:3000/'; // TODO: Make configurable.
  }

  async getConference(uniqueName: string) {
    return this.get(`conferences/${uniqueName}`);
  }

  async getConferences() {
    return this.get(`conferences`);
  }
}
