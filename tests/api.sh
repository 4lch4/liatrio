#!/bin/bash

NC='\033[0m'
GREEN='\033[0;32m'
BASE_URL='http://localhost:8080/api/v1'

echo -e "${GREEN}Sending request to liveness endpoint...${NC}"

curl -w "\n" "$BASE_URL/health/liveness"

echo -e "${GREEN}Sending request to readiness endpoint...${NC}"

curl -w "\n" "$BASE_URL/health/readiness"

echo -e "${GREEN}Sending request to root endpoint...${NC}"

curl -w "\n" "$BASE_URL/"
