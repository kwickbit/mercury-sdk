"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_FULL_ACCOUNT_SUBSCRIPTIONS = void 0;
const graphql_request_1 = require("graphql-request");
exports.GET_FULL_ACCOUNT_SUBSCRIPTIONS = (0, graphql_request_1.gql) `
  query MyQuery($contractId: String!) {
    eventByContractId(searchedContractId: $contractId) {
      edges {
        node {
          contractId
          data
          ledger
          ledgerTimestamp
          topic1
          topic2
          topic3
          topic4
        }
      }
    }
  }
`;
