export interface GetContractEventsResponse {
    eventByContractId: EventByContractID;
}
export interface EventByContractID {
    nodes: Node[];
}
export interface Node {
    contractId: string;
    data: string;
    topic1: string;
    topic2?: string;
    topic3?: string;
    topic4?: string;
    txInfoByTx?: {
        ledgerByLedger?: {
            closeTime: number;
            sequence: number;
        };
        memo: string;
        txHash: string;
        opCount: number;
        fee: string;
    };
}
export interface ContractEvent {
    [key: string]: unknown;
    topic1: string;
    topic2: string;
    topic3: string;
    topic4: string;
    ledger?: number;
    timestamp?: number;
}
