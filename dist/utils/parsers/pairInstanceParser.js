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
exports.pairInstanceParser = void 0;
const convert_1 = require("../convert");
const StellarSdk = __importStar(require("@stellar/stellar-sdk"));
/**
 * Enum representing the key names for pair instance properties.
 */
var keyNames;
(function (keyNames) {
    keyNames[keyNames["token0"] = 0] = "token0";
    keyNames[keyNames["token1"] = 1] = "token1";
    keyNames[keyNames["reserve0"] = 2] = "reserve0";
    keyNames[keyNames["reserve1"] = 3] = "reserve1";
    keyNames[keyNames["factoryAddress"] = 4] = "factoryAddress";
    keyNames[keyNames["totalShares"] = 5] = "totalShares";
    keyNames[keyNames["pairToken"] = 6] = "pairToken";
    keyNames[keyNames["pairAddress"] = 7] = "pairAddress";
})(keyNames || (keyNames = {}));
/**
 * Parses the contract entries response and returns an array of parsed pair entries.
 * @param data The contract entries response object.
 * @returns An array of parsed pair entries.
 * @throws Error if no entries are provided or if no valueXdr is found in an entry.
 */
const pairInstanceParser = (data) => {
    if (!data.entryUpdateByContractId) {
        throw new Error("No entries provided");
    }
    const allEntries = data.entryUpdateByContractId.edges;
    const parsedEntries = [];
    for (const entry of allEntries) {
        if (!entry.node.valueXdr) {
            throw new Error("No valueXdr found in the entry");
        }
        const base64Xdr = entry.node.valueXdr;
        const parsedXdr = StellarSdk.xdr.ScVal.fromXDR(base64Xdr, "base64");
        const jsValues = (0, convert_1.scValToJs)(parsedXdr);
        const parsedEntry = {};
        if (typeof jsValues.storage !== "undefined") {
            for (let key in jsValues.storage()) {
                const i = parseInt(key);
                const element = jsValues.storage()[key].val();
                Object.assign(parsedEntry, { [keyNames[i]]: (0, convert_1.scValToJs)(element) });
            }
            parsedEntries.push(parsedEntry);
        }
    }
    return parsedEntries;
};
exports.pairInstanceParser = pairInstanceParser;
