"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_PATH_PAYMENTS_STRICT_RECEIVE_BY_PUBLIC_KEY = void 0;
const graphql_request_1 = require("graphql-request");
exports.GET_PATH_PAYMENTS_STRICT_RECEIVE_BY_PUBLIC_KEY = (0, graphql_request_1.gql) `
  query FullQuery($publicKey: String!) {
    pathPaymentsStrictReceiveByPublicKey(publicKeyText: $publicKey) {
      nodes {
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
        accountBySource {
          publickey
        }
        accountByDestination {
          publickey
        }
        assetByDestAsset {
          code
          issuer
        }
        assetByPath1Asset {
          code
          issuer
        }
        assetByPath2Asset {
          code
          issuer
        }
        assetByPath3Asset {
          issuer
          code
        }
        assetByPath4Asset {
          issuer
          code
        }
        assetByPath5Asset {
          issuer
          code
        }
        assetBySendAsset {
          code
          issuer
        }
        destAssetNative
        path1AssetNative
        path2AssetNative
        path3AssetNative
        path4AssetNative
        path5AssetNative
        sendAssetNative
        destAmount
        sendMax
      }
    }
  }
`;
