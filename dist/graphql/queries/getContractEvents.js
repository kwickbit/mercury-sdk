"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_CONTRACT_EVENTS = void 0;
const graphql_request_1 = require("graphql-request");
exports.GET_CONTRACT_EVENTS = (0, graphql_request_1.gql) `
  query MyQuery($contractId: String) {
    eventByContractId(searchedContractId: $contractId) {
      nodes {
        contractId
        data
        topic1
        topic2
        topic3
        topic4
        txInfoByTx {
          ledgerByLedger {
            closeTime
            sequence
          }
          memo
          txHash
          opCount
          fee
        }
      }
    }
  }
`;
