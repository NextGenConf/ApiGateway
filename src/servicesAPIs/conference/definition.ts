export interface ConferenceAPI {
  getConferences(): Promise<Conference[]>;
  getConference(uniqueName: string): Promise<Conference>;
  createConference(conference: Conference): Promise<Conference>;
  updateConference(conference: Partial<Conference>): Promise<Conference>;
}

export interface Conference {
  uniqueName: string;
  displayName: string;
  description?: string;
}
