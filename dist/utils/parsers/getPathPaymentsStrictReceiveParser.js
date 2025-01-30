"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPathPaymentsStrictReceiveParser = void 0;
const getPathPaymentsStrictReceiveParser = (data) => {
    const parsedData = data?.pathPaymentsStrictReceiveByPublicKey?.nodes?.map((node) => {
        return {
            from: node?.accountBySource?.publickey,
            to: node?.accountByDestination?.publickey,
            sendAmount: node?.destAmount,
            sendAsset: node?.assetBySendAsset?.issuer,
            destMin: node?.sendMax,
            destAsset: node?.assetByDestAsset?.issuer,
        };
    });
    return parsedData;
};
exports.getPathPaymentsStrictReceiveParser = getPathPaymentsStrictReceiveParser;
