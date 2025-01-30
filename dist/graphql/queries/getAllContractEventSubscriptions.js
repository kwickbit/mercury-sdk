"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_ALL_CONTRACT_EVENT_SUBSCRIPTIONS = void 0;
const graphql_request_1 = require("graphql-request");
exports.GET_ALL_CONTRACT_EVENT_SUBSCRIPTIONS = (0, graphql_request_1.gql) `
  query MyQuery {
    allContractEventSubscriptions {
      edges {
        node {
          contractId
          topic1
          topic2
          topic3
          topic4
          subscriptionId
          userId
          maxSingleSize
        }
      }
    }
  }
`;
