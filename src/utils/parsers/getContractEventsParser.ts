import type { GetContractEventsResponse } from "../../types";
import { Node } from "../../types/getContractEvents";
import { parseXdr } from "../convert";

export const getContractEventsParser = (data: GetContractEventsResponse) =>
  data.eventByContractId.nodes.map((node: Node) => {
    const jsData = parseXdr(node.data);
    const baseObject = typeof jsData === "object" && jsData !== null ? jsData : { value: jsData };

    return Object.assign(baseObject, {
      topic1: parseXdr(node.topic1),
      topic2: parseXdr(node.topic2),
      ledger: node.ledger,
      timestamp: node.ledgerTimestamp,
    });
  });
