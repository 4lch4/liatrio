#!/bin/bash

################################################################################
## Author:      Devin W. Leaman (4lch4)                                       ##
## Version:     1.0.0                                                         ##
## Filename:    cluster.sh                                                    ##
## Created On:  04/10/2023 @ 13:23                                            ##
################################################################################
## Description:                                                               ##
##                                                                            ##
##                                                                            ##
## This script is responsible for running some kubectl commands to validate   ##
## the EKS cluster was created and the local kubeconfig was updated so we can ##
## access the cluster.                                                        ##
################################################################################
## Usage:                                                                     ##
##                                                                            ##
## ./cluster.sh                                                               ##
################################################################################

kubectl version

kubectl cluster-info
