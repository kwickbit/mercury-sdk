"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getReceivedPaymentsParser = void 0;
const convert_1 = require("../convert");
const getReceivedPaymentsParser = (data) => {
    const parsedData = data?.paymentsToPublicKey?.edges?.map((payment) => {
        return {
            from: payment?.node?.accountBySource?.publickey,
            to: payment?.node?.accountByDestination?.publickey,
            amount: payment?.node?.amount,
            assetNative: payment?.node?.assetNative,
            asset: (0, convert_1.stellarAssetId)(payment?.node?.assetByAsset?.code, payment?.node?.assetByAsset?.issuer),
            ledger: payment?.node?.txInfoByTx?.ledgerByLedger?.sequence,
            timestamp: payment?.node?.txInfoByTx?.ledgerByLedger?.closeTime,
        };
    });
    return parsedData;
};
exports.getReceivedPaymentsParser = getReceivedPaymentsParser;
