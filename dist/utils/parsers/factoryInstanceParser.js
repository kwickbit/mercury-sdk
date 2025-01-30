"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.factoryInstanceParser = void 0;
const convert_1 = require("../convert");
const StellarSdk = __importStar(require("@stellar/stellar-sdk"));
/**
 * Enum representing the keys for data in the factory instance.
 */
var DataKey;
(function (DataKey) {
    DataKey[DataKey["feeTo"] = 0] = "feeTo";
    DataKey[DataKey["feeToSetter"] = 1] = "feeToSetter";
    DataKey[DataKey["allPairs"] = 2] = "allPairs";
    DataKey[DataKey["pairsMapping"] = 3] = "pairsMapping";
    DataKey[DataKey["pairWasmHash"] = 4] = "pairWasmHash";
    DataKey[DataKey["feesEnabled"] = 5] = "feesEnabled";
})(DataKey || (DataKey = {}));
/**
 * Parses the data from a ContractEntriesResponse object and returns an array of ParsedRouterEntry objects.
 * @param data The ContractEntriesResponse object to be parsed.
 * @returns An array of ParsedRouterEntry objects.
 * @throws Error if no entries are provided or if no valueXdr is found in an entry.
 */
const factoryInstanceParser = (data) => {
    if (!data.entryUpdateByContractId) {
        throw new Error("No entries provided");
    }
    const parsedEntries = [];
    for (const entry of data.entryUpdateByContractId.edges) {
        const base64Xdr = entry.node.valueXdr;
        if (!base64Xdr) {
            throw new Error("No valueXdr found in the entry");
        }
        const parsedData = StellarSdk.xdr.ScVal.fromXDR(base64Xdr, "base64");
        const jsValues = (0, convert_1.scValToJs)(parsedData);
        const parsedValue = {};
        if (typeof jsValues.storage !== "undefined") {
            for (let key in jsValues.storage()) {
                const i = parseInt(key);
                const element = jsValues.storage()[key].val();
                Object.assign(parsedValue, { [DataKey[i]]: (0, convert_1.scValToJs)(element) });
            }
            parsedEntries.push(parsedValue);
        }
    }
    return parsedEntries;
};
exports.factoryInstanceParser = factoryInstanceParser;
