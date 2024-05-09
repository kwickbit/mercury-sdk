import { GetPathPaymentsStrictReceiveByPublicKeyResponse } from "../../types";

export interface getPathPaymentsStrictReceiveParsed {
  from?: string;
  to?: string;
  sendAmount?: string;
  sendAsset?: string;
  destMin?: string;
  destAsset?: string;
}

export const getPathPaymentsStrictReceiveParser = (
  data: GetPathPaymentsStrictReceiveByPublicKeyResponse
): getPathPaymentsStrictReceiveParsed[] => {
  const parsedData = data?.pathPaymentsStrictReceiveByPublicKey?.nodes?.map(
    (node) => {
      return {
        from: node?.accountBySource?.publickey,
        to: node?.accountByDestination?.publickey,
        sendAmount: node?.destAmount,
        sendAsset: node?.assetBySendAsset?.issuer,
        destMin: node?.sendMax,
        destAsset: node?.assetByDestAsset?.issuer,
      };
    }
  );

  return parsedData;
};
