# IaaC

This repo is where I'll store my Terraform files for creating the infrastructure necessary for this exercise.

## Prerequisites

- [Terraform CLI][2] (v1.3+)
- [AWS CLI][4]
- [AWS IAM Authenticator][5]
- [Kubectl][3] v1.24+
- Optional: [Taskfile CLI][6]

## How To

### With Taskfile CLI

1. Run `task build` from within this (`./iaac`) directory.
   1. This will take quite some time, anywhere from 10-20 minutes depending on your machine and network connection.
2. Once it's done, it will have updated your local kubeconfig with the necessary info for your new cluster and runs `kubectl cluster-info` to verify the setup was successful.

### Without Taskfile CLI

If you don't have the CLI that's file, you'll just need to run the commands it would run for you:

1. First up, we need to provision the EKS cluster.
   1. This is done using `terraform apply`.
   2. This will take quite some time, anywhere from 10-20 minutes depending on your machine and network connection.
2. Once the above completes, you need to update your kubeconfig with the information of your new cluster.
   1. This is done using the AWS cli like so:

      ```bash
      aws eks --region $(terraform output -raw region) update-kubeconfig \
        --name $(terraform output -raw cluster_name)
      ```

3. Finally, you'll want to verify the kubeconfig was updated properly.
   1. `kubectl cluster-info`

## Terraform Guide

A lot of the files for the EKS cluster come from the [learn-terraform-provision-eks-cluster repository][0] that is a companion repo to the [Provision an EKS Cluster tutorial][1]. I simply modified them to fit my needs.


[0]: https://github.com/hashicorp/learn-terraform-provision-eks-cluster
[1]: https://developer.hashicorp.com/terraform/tutorials/kubernetes/eks
[2]: https://developer.hashicorp.com/terraform/tutorials/aws-get-started/install-cli#install-terraform
[3]: https://kubernetes.io/docs/tasks/tools
[4]: https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html
[5]: https://docs.aws.amazon.com/eks/latest/userguide/install-aws-iam-authenticator.html
[6]: https://taskfile.dev
