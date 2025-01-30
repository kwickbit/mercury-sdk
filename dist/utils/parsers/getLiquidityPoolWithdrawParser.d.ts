import type { LiquidityPoolWithdrawByPublicKeyResponse } from "../../types/liquidityPool";
export interface getLiquidityPoolWithdrawParsed {
    source?: number;
    poolId?: string;
    maxAmountA?: string;
    maxAmountB?: string;
    amount?: string;
    ledger?: number;
    timestamp?: number;
}
export declare const getLiquidityPoolWithdrawParser: (data: LiquidityPoolWithdrawByPublicKeyResponse) => getLiquidityPoolWithdrawParsed[];
