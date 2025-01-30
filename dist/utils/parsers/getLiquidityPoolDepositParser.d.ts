import type { LiquidityPoolDepositByPublicKeyResponse } from "../../types/liquidityPool";
export interface getLiquidityPoolDepositParsed {
    source?: number;
    poolId?: string;
    maxAmountA?: string;
    maxAmountB?: string;
    minPriceN?: number;
    minPriceD?: number;
    maxPriceN?: number;
    maxPriceD?: number;
    ledger?: number;
    timestamp?: number;
}
export declare const getLiquidityPoolDepositParser: (data: LiquidityPoolDepositByPublicKeyResponse) => getLiquidityPoolDepositParsed[];
