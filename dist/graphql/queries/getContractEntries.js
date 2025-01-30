"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_CONTRACT_ENTRIES = void 0;
const graphql_request_1 = require("graphql-request");
exports.GET_CONTRACT_ENTRIES = (0, graphql_request_1.gql) `
  query MyQuery($contractId: String!) {
    entryUpdateByContractId(contract: $contractId) {
      edges {
        node {
          keyXdr
          valueXdr
        }
      }
    }
  }
`;
