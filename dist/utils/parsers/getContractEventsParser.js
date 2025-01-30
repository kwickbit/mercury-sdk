"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContractEventsParser = void 0;
const convert_1 = require("../convert");
const getContractEventsParser = (data) => data.eventByContractId.nodes.map((node) => {
    const jsData = (0, convert_1.parseXdr)(node.data);
    const baseObject = typeof jsData === "object" && jsData !== null ? jsData : { value: jsData };
    const topics = [node.topic1, node.topic2, node.topic3, node.topic4].reduce((parsedTopics, topic) => {
        const parsed = topic ? (0, convert_1.parseXdr)(topic) : undefined;
        return (parsed ? [...parsedTopics, parsed] : parsedTopics);
    }, []);
    return Object.assign(baseObject, {
        topic1: topics[0],
        topic2: topics[1],
        topic3: topics[2],
        topic4: topics[3],
        ledger: node.txInfoByTx?.ledgerByLedger?.sequence,
        timestamp: node.txInfoByTx?.ledgerByLedger?.closeTime,
    });
});
exports.getContractEventsParser = getContractEventsParser;
