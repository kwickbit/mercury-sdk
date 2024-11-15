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
  topic2: string;
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
