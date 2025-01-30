import type { GetPathPaymentsStrictSendByPublicKeyResponse } from "../../types";
export interface getPathPaymentsStrictSendParsed {
    from?: string;
    to?: string;
    sendAmount?: string;
    sendAsset?: string;
    destMin?: string;
    destAsset?: string;
}
export declare const getPathPaymentsStrictSendParser: (data: GetPathPaymentsStrictSendByPublicKeyResponse) => getPathPaymentsStrictSendParsed[];
