export interface GetContractEventsResponse {
  eventByContractId: EventByContractID;
}

export interface EventByContractID {
  nodes: Node[];
}

export interface Node {
  contractId: string;
  data: string;
  ledger: number;
  ledgerTimestamp: number;
  topic1: string;
  topic2: string;
  topic3: string;
  topic4: string;
}
