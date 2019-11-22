import { RESTDataSource } from 'apollo-datasource-rest';

export class SessionsApi extends RESTDataSource {
  constructor(baseUrl: string) {
    super();
    this.baseURL = baseUrl;
  }

  async getSession(uniqueName: string) {
    return this.get(`/api/session/${uniqueName}`);
  }

  async getAllSessions() {
    return this.get(`/api/session/`);
  }
}
