#!/bin/bash

NC='\033[0m'
YELLOW='\033[0;33m'
BASE_URL='http://localhost:8080/api/v1'

echo -e "${YELLOW}Sending request to liveness endpoint...${NC}"

curl -w "\n" "$BASE_URL/health/liveness"

echo -e "${YELLOW}Sending request to readiness endpoint...${NC}"

curl -w "\n" "$BASE_URL/health/readiness"

echo -e "${YELLOW}Sending request to root endpoint...${NC}"

curl -w "\n" "$BASE_URL/"
