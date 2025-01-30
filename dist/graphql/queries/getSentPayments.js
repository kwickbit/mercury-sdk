"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_SENT_PAYMENTS = void 0;
const graphql_request_1 = require("graphql-request");
exports.GET_SENT_PAYMENTS = (0, graphql_request_1.gql) `
  query sentPayments($publicKey: String!) {
    paymentsByPublicKey(publicKeyText: $publicKey) {
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
