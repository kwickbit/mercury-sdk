import type { GetReceivedPaymentsResponse } from "../../types";
export interface getReceivedPaymentsParsed {
    from?: string;
    to?: string;
    amount?: string;
    assetNative?: boolean;
    asset?: string;
    ledger?: number;
    timestamp?: number;
}
export declare const getReceivedPaymentsParser: (data: GetReceivedPaymentsResponse) => getReceivedPaymentsParsed[];
