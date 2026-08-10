# Celebration of Lights infrastructure

Deploys a CloudFront distribution in front of the private S3 bucket created by
the UI project. The stack outputs the working CloudFront HTTPS URL and the
distribution ID.

The CloudFront OAC read permission is managed by the bucket policy in the UI
stack. This infrastructure stack does not create or modify the S3 bucket policy.

The bucket name defaults to `celebration-of-lights-ui`. Override it when needed:

```bash
UI_BUCKET_NAME=my-ui-bucket npm run deploy -- --require-approval never
```

To deploy with the default bucket:

```bash
npm ci
npm run build
npm run deploy -- --require-approval never
```
