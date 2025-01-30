"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLiquidityPoolDepositParser = void 0;
const getLiquidityPoolDepositParser = (data) => {
    const parsedData = data?.liquidityPoolDepositByPublicKey?.edges?.map((edge) => {
        return {
            source: edge?.node?.source,
            poolId: edge?.node?.poolId,
            maxAmountA: edge?.node?.maxAmountA,
            maxAmountB: edge?.node?.maxAmountB,
            minPriceN: edge?.node?.minPriceN,
            minPriceD: edge?.node?.minPriceD,
            maxPriceN: edge?.node?.maxPriceN,
            maxPriceD: edge?.node?.maxPriceD,
            ledger: edge?.node?.txInfoByTx?.ledgerByLedger?.sequence,
            timestamp: edge?.node?.txInfoByTx?.ledgerByLedger?.closeTime,
        };
    });
    return parsedData;
};
exports.getLiquidityPoolDepositParser = getLiquidityPoolDepositParser;
