#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import * as dotenv from "dotenv";
import { InfrastructureStack } from "../lib/infrastructure-stack";

dotenv.config({ path: __dirname + "/../../env/.env" });

if (!process.env.VITE_APP_DOMAIN) {
  console.error("VITE_APP_DOMAIN needs to be set in .env");
  process.exit(1);
}

const appConfig = {
  appDomain: process.env.VITE_APP_DOMAIN || "",
};

const app = new cdk.App();

new InfrastructureStack(app, "RaktarFrontendStack", appConfig);
