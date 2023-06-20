import * as cdk from "aws-cdk-lib";
import { aws_certificatemanager as certificatemanager } from "aws-cdk-lib";
import { aws_route53 as route53 } from "aws-cdk-lib";
import { Construct } from "constructs";

import config from "./config";

export class CertificateStack extends cdk.Stack {
  readonly certificate: certificatemanager.Certificate;

  constructor(scope: Construct, id: string) {
    super(scope, id, {
      env: {
        account: config.account,
        region: "us-east-1",
      },
      crossRegionReferences: true,
    });

    const hostedZone = route53.HostedZone.fromLookup(this, "HostedZone", {
      domainName: config.hostedZoneDomain,
    });
    const validation = certificatemanager.CertificateValidation.fromDns(hostedZone);
    this.certificate = new certificatemanager.Certificate(this, "Cert", {
      domainName: config.appDomain,
      subjectAlternativeNames: [`www.${config.appDomain}`],
      validation,
    });
  }
}
