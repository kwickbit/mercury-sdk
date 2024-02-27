import { gql } from "graphql-request";

export const GET_PATH_PAYMENTS_STRICT_SEND_BY_PUBLIC_KEY = gql`
  query FullQuery($publicKey: String!) {
    pathPaymentsStrictSendByPublicKey(publicKeyText: $publicKey) {
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
        assetByPath1 {
          code
          issuer
        }
        assetByPath2 {
          code
          issuer
        }
        assetByPath3 {
          issuer
          code
        }
        assetByPath4 {
          issuer
          code
        }
        assetByPath5 {
          issuer
          code
        }
        assetBySendAsset {
          code
          issuer
        }
        destAssetNative
        destMin
        path1Native
        path2Native
        path3Native
        path4Native
        path5Native
        sendAmount
        sendAssetNative
      }
    }
  }
`;
