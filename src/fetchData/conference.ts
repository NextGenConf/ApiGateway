import Conference from "../models/conference";

import * as fs from "fs";
import * as path from "path";
import * as util from "util";

// Convert fs.readFile into Promise version of same
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const root = path.dirname(path.dirname(__dirname));
const getConferences = async (): Promise<Conference[]> => {
  const data = await readFile(
    path.resolve(root, "testdata", "conferences.json")
  );
  const conferences: Conference[] = JSON.parse(data.toString());
  return conferences;
};

const getConference = async (
  uniqueName: string
): Promise<Conference | undefined> => {
  const data = await readFile(
    path.resolve(root, "testdata", "conferences.json")
  );
  const conferences: Conference[] = JSON.parse(data.toString());
  return conferences.find(conference => uniqueName === conference.uniqueName);
};

const createConference = async (
  conference: Conference
): Promise<Conference> => {
  const data = await readFile(
    path.resolve(root, "testdata", "conferences.json")
  );

  const conferences: Conference[] = JSON.parse(data.toString());
  if (conferences.find(conf => conference.uniqueName === conf.uniqueName)) {
    throw new Error(
      `Conference with uniqueName: ${conference.uniqueName} already exists`
    );
  } else {
    conferences.push(conference);
    await writeFile(
      path.resolve(root, "testdata", "conferences.json"),
      JSON.stringify(conferences, null, 4)
    );
    return conference;
  }
};

export { getConferences, getConference, createConference };
