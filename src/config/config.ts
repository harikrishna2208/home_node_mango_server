import * as environmentFile from "dotenv";
environmentFile.config();

const int = (val: string | undefined, num: number): number =>
  val ? (isNaN(parseInt(val)) ? num : parseInt(val)) : num;

interface DatabaseEnvImport {
  port: number;
  mangoUrl: String;
  nodeEnvironment: string;
}

// TODO: create a Booleand, integer and String unit Function for this env
export const dotenv: DatabaseEnvImport = {
  port: int(process.env.port, 4000),
  mangoUrl: "asdassdll",
  nodeEnvironment: "development",
};
