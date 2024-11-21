import { gql } from "graphql-request";

export const GET_FULL_ACCOUNT_SUBSCRIPTIONS = gql`
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
