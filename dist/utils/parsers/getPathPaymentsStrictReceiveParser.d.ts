import type { GetPathPaymentsStrictReceiveByPublicKeyResponse } from "../../types";
export interface getPathPaymentsStrictReceiveParsed {
    from?: string;
    to?: string;
    sendAmount?: string;
    sendAsset?: string;
    destMin?: string;
    destAsset?: string;
}
export declare const getPathPaymentsStrictReceiveParser: (data: GetPathPaymentsStrictReceiveByPublicKeyResponse) => getPathPaymentsStrictReceiveParsed[];
