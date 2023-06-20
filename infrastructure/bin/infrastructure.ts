#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { InfrastructureStack } from "../lib/infrastructure-stack";
import { CertificateStack } from "../lib/certificate_stack";

const app = new cdk.App();

const certificate_stack = new CertificateStack(app, "RaktarFrontendCertificateStack");
new InfrastructureStack(app, "RaktarFrontendStack", certificate_stack.certificate);
