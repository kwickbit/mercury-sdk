"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_LIQUIDITY_POOL_DEPOSIT_BY_PUBLIC_KEY = void 0;
const graphql_request_1 = require("graphql-request");
exports.GET_LIQUIDITY_POOL_DEPOSIT_BY_PUBLIC_KEY = (0, graphql_request_1.gql) `
  query MyQuery($publicKey: String!) {
    liquidityPoolDepositByPublicKey(publicKeyText: $publicKey) {
      edges {
        node {
          source
          sourceMuxed
          poolId
          maxAmountA
          maxAmountB
          minPriceN
          minPriceD
          maxPriceN
          maxPriceD
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
