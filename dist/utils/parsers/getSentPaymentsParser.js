"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSentPaymentsParser = void 0;
const convert_1 = require("../convert");
const getSentPaymentsParser = (data) => {
    const parsedData = data?.paymentsByPublicKey?.edges?.map((payment) => {
        console.log("payment:", payment);
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
exports.getSentPaymentsParser = getSentPaymentsParser;
