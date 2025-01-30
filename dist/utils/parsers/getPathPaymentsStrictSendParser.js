"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPathPaymentsStrictSendParser = void 0;
const getPathPaymentsStrictSendParser = (data) => {
    const parsedData = data?.pathPaymentsStrictSendByPublicKey?.nodes?.map((node) => {
        return {
            from: node?.accountBySource?.publickey,
            to: node?.accountByDestination?.publickey,
            sendAmount: node?.sendAmount,
            sendAsset: node?.assetBySendAsset?.issuer,
            destMin: node?.destMin,
            destAsset: node?.assetByDestAsset?.issuer,
        };
    });
    return parsedData;
};
exports.getPathPaymentsStrictSendParser = getPathPaymentsStrictSendParser;
