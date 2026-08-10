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

## GitHub Actions deployment

The workflow in `.github/workflows/deploy.yml` builds and synthesizes the CDK
app on pull requests. It deploys on pushes to `main` and can also be started
manually from the Actions tab.

Configure the repository before the first deployment:

1. Bootstrap the target account and region once with `npx cdk bootstrap`.
2. Create an AWS IAM role that trusts GitHub's OIDC provider and grants the
   permissions needed by CDK/CloudFormation to deploy this stack.
3. Add the role ARN as the repository secret or variable `AWS_ROLE_ARN` under
   **Settings > Secrets and variables > Actions**. Repository secrets take
   precedence when both are configured.
4. Optionally add the repository variable `AWS_REGION` (defaults to
   `us-east-1`) and `UI_BUCKET_NAME` (defaults to
   `celebration-of-lights-ui`).

The role's trust policy should restrict `token.actions.githubusercontent.com`
to this repository and the `main` branch. No long-lived AWS access keys are
required.
