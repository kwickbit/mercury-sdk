"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_RECEIVED_PAYMENTS = void 0;
const graphql_request_1 = require("graphql-request");
exports.GET_RECEIVED_PAYMENTS = (0, graphql_request_1.gql) `
  query receivedPayments($publicKey: String!) {
    paymentsToPublicKey(publicKeyText: $publicKey) {
      edges {
        node {
          amount
          assetByAsset {
            code
            issuer
          }
          accountByDestination {
            publickey
          }
          accountBySource {
            publickey
          }
          muxedaccountByDestinationMuxed {
            publickey
            muxedaccountid
          }
          muxedaccountBySourceMuxed {
            publickey
            muxedaccountid
          }
          txInfoByTx {
            ledgerByLedger {
              closeTime
              sequence
            }
          }
          assetNative
        }
      }
    }
  }
`;
