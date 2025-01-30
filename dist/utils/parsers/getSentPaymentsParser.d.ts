import type { GetSentPaymentsResponse } from "../../types";
export interface getSentPaymentsParsed {
    from?: string;
    to?: string;
    amount?: string;
    assetNative?: boolean;
    asset?: string;
}
export declare const getSentPaymentsParser: (data: GetSentPaymentsResponse) => getSentPaymentsParsed[];
