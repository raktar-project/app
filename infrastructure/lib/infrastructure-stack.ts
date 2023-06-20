import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { RemovalPolicy } from "aws-cdk-lib";
import { aws_s3 as s3 } from "aws-cdk-lib";
import { aws_s3_deployment as s3_deployment } from "aws-cdk-lib";
import { aws_certificatemanager as certificatemanager } from "aws-cdk-lib";
import { aws_cloudfront as cloudfront } from "aws-cdk-lib";
import { aws_cloudfront_origins as origins } from "aws-cdk-lib";

import config from "./config";

export class InfrastructureStack extends cdk.Stack {
  constructor(scope: Construct, id: string, certificate: certificatemanager.Certificate) {
    const env = { account: config.account, region: config.region };
    super(scope, id, { crossRegionReferences: true, env });

    const domainNames = [config.appDomain, `www.${config.appDomain}`];

    const bucket = new s3.Bucket(this, "FrontendBucket", {
      autoDeleteObjects: true,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      removalPolicy: RemovalPolicy.DESTROY,
    });

    const behaviour: cloudfront.BehaviorOptions = {
      origin: new origins.S3Origin(bucket),
      viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
    };

    const distribution = new cloudfront.Distribution(this, "FrontendAppDistribution", {
      defaultBehavior: behaviour,
      defaultRootObject: "index.html",
      domainNames,
      certificate,
      errorResponses: [
        {
          httpStatus: 403,
          responseHttpStatus: 200,
          responsePagePath: "/index.html",
        },
        {
          httpStatus: 404,
          responseHttpStatus: 200,
          responsePagePath: "/index.html",
        },
      ],
    });

    new s3_deployment.BucketDeployment(this, "S3BucketDeployment", {
      sources: [s3_deployment.Source.asset("../dist")],
      destinationBucket: bucket,
      distribution,
      distributionPaths: ["/*"],
    });

    new cdk.CfnOutput(this, "CloudFront URL", { value: distribution.domainName });
  }
}
