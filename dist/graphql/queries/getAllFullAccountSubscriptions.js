"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_ALL_FULL_ACCOUNT_SUBSCRIPTIONS = void 0;
const graphql_request_1 = require("graphql-request");
exports.GET_ALL_FULL_ACCOUNT_SUBSCRIPTIONS = (0, graphql_request_1.gql) `
  query MyQuery {
    allFullAccountSubscriptions {
      edges {
        node {
          id
          nodeId
          publickey
          userId
        }
      }
    }
  }
`;
