import type { GetContractEventsResponse } from "../../types";
import { Node } from "../../types/getContractEvents";
import { parseXdr } from "../convert";

export const getContractEventsParser = (data: GetContractEventsResponse) =>
  data.eventByContractId.nodes.map((node: Node) => {
    const jsData = parseXdr(node.data);
    const baseObject = typeof jsData === "object" && jsData !== null ? jsData : { value: jsData };

    const topics = [node.topic1, node.topic2, node.topic3, node.topic4].reduce<string[]>(
      (parsedTopics, topic) => {
        const parsed = topic ? parseXdr(topic) : undefined;
        return (parsed ? [...parsedTopics, parsed] : parsedTopics) as string[];
      },
      [],
    );

    return Object.assign(baseObject, {
      topic1: topics[0],
      topic2: topics[1],
      topic3: topics[2],
      topic4: topics[3],
      ledger: node.txInfoByTx?.ledgerByLedger?.sequence,
      timestamp: node.txInfoByTx?.ledgerByLedger?.closeTime,
    });
  });
