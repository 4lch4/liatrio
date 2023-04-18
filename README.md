# Liatrio Exercise

This directory is where I'll be storing files related to the hiring exercise provided to me by Liatrio.

## Prerequisites

The following is a list of the things that must be installed/configured on your machine before you're able to actually use the contents of this repository:

- Docker
- Terraform v1.3+
- The AWS CLI (`v2.7.0`/`v1.24.0`) or newer, [installed][2] and [configured][3].
- A method of authenticating the AWS CLI with your account.
  - In my case, I used the [AWS IAM Authenticator][4] and set the `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` environment variables.
- [kubectl][5] `v1.24.0` or newer.
- [Taskfile CLI][6]

## Usage

### Fresh Start

If this is your first time working with the repository then you'll need to do the following:

1. Create an EKS cluster.
2. Create the Docker image for the API.
3. Push the image to a remote registry.
4. Deploy the app to your EKS cluster.
   1. I was unable to get a working K8s manifest so this step is skipped.
5. Finally, perform some tests to validate it was all done correctly.

To make this as simple as possible, you can run `task fresh` and it will automatically run all the commands needed for everything just mentioned.

At the time of writing, steps 1-3 are working as expected. Steps 4 & 5 are still being developed and once done, this message will disappear.

### Individual Commands

If you wish to start everything up from scratch with individual commands then you can do so with the following:

1. `task build:eks`
   1. This command can take anywhere from 10-20 minutes, depending on your hardware and connection.
2. `task build:api`
3. `task start:api`
4. `task test:all`


[0]: https://taskfile.dev/installation
[1]: https://www.docker.com/products/docker-desktop
[2]: https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html
[3]: https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html
[4]: https://docs.aws.amazon.com/eks/latest/userguide/install-aws-iam-authenticator.html
[5]: https://kubernetes.io/docs/tasks/tools/
[6]: https://taskfile.dev
