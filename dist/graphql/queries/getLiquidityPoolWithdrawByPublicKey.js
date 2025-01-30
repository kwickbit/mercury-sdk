"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_LIQUIDITY_POOL_WITHDRAW_BY_PUBLIC_KEY = void 0;
const graphql_request_1 = require("graphql-request");
exports.GET_LIQUIDITY_POOL_WITHDRAW_BY_PUBLIC_KEY = (0, graphql_request_1.gql) `
  query MyQuery($publicKey: String!) {
    liquidityPoolWithdrawByPublicKey(publicKeyText: $publicKey) {
      edges {
        node {
          source
          sourceMuxed
          poolId
          amount
          minAmountA
          minAmountB
          txInfoByTx {
            ledgerByLedger {
              sequence
              closeTime
            }
          }
        }
      }
    }
  }
`;
