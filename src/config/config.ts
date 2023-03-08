import * as environmentFile from "dotenv";
environmentFile.config();

const int = (val: string | undefined, num: number): number =>
  val ? (isNaN(parseInt(val)) ? num : parseInt(val)) : num;

interface DatabaseEnvImport {
  port: number;
  mangoUrl: string;
  nodeEnvironment: string;
}

// TODO: create a Boolean, integer and String unit Function for this env
export const dotenv: DatabaseEnvImport = {
  port: int(process.env.port, 4000),
  mangoUrl: process.env.mongoURL ?? "mongodb://localhost/27017",
  nodeEnvironment: process.env.NODE_ENV ?? "development",
};
