import * as dotenv from "dotenv";

export interface AppConfig {
  account: string;
  region: string;
  hostedZoneDomain: string;
  appDomain: string;
}

dotenv.config({ path: __dirname + "/../../env/.env" });

if (!process.env.VITE_HOSTED_ZONE_DOMAIN) {
  console.error("VITE_APP_DOMAIN needs to be set in .env");
  process.exit(1);
}

const hostedZoneDomain = process.env.VITE_HOSTED_ZONE_DOMAIN;
const appConfig: AppConfig = {
  account: process.env.CDK_DEFAULT_ACCOUNT || "",
  region: process.env.CDK_DEFAULT_REGION || "",
  hostedZoneDomain,
  appDomain: `crates.${hostedZoneDomain}`,
};

export default appConfig;
