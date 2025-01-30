"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLiquidityPoolWithdrawParser = void 0;
const getLiquidityPoolWithdrawParser = (data) => {
    const parsedData = data?.liquidityPoolWithdrawByPublicKey?.edges?.map((edge) => {
        return {
            source: edge?.node?.source,
            poolId: edge?.node?.poolId,
            amount: edge?.node?.amount,
            maxAmountA: edge?.node?.maxAmountA,
            maxAmountB: edge?.node?.maxAmountB,
            ledger: edge?.node?.txInfoByTx?.ledgerByLedger?.sequence,
            timestamp: edge?.node?.txInfoByTx?.ledgerByLedger?.closeTime,
        };
    });
    return parsedData;
};
exports.getLiquidityPoolWithdrawParser = getLiquidityPoolWithdrawParser;
