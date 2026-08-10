#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CelebrationOfLightsDistributionStack } from '../lib/celebration-of-lights-distribution-stack';

const app = new cdk.App();
const bucketName = process.env.UI_BUCKET_NAME ?? 'celebration-of-lights-ui';

new CelebrationOfLightsDistributionStack(app, 'CelebrationOfLightsDistributionStack', {
  bucketName,
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
  description: 'CloudFront distribution for the Celebration of Lights UI',
});
