# Exercise Tests

This directory is where I'll store scripts that perform various tests on the API/IaaC Cluster.

## API

To verify the API was started correctly and is responding on the 3 expected endpoints, we have the `api.sh` script which will perform the following steps:

1. Send a request to `localhost:8080/api/v1/health/liveness` to validate the liveness endpoint is working.
2. Send a request to `localhost:8080/api/v1/health/readiness` to validate the readiness endpoint is working.
3. Send a request to `localhost:8080/api/v1/`, the root/primary endpoint, which returns a message and timestamp.

## Cluster

To verify the EKS cluster was built and the local kubeconfig was updated successfully we have the `cluster.sh` script which will perform the following steps:

1. Run `kubectl version` to display the version of the kubectl binary and the remote cluster.
2. Run `kubectl cluster-info` to display information on the currently selected cluster (should be the new EKS cluster).
