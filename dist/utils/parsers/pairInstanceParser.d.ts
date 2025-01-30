import type { ContractEntriesResponse, PairEntry } from "../../types";
/**
 * Parses the contract entries response and returns an array of parsed pair entries.
 * @param data The contract entries response object.
 * @returns An array of parsed pair entries.
 * @throws Error if no entries are provided or if no valueXdr is found in an entry.
 */
export declare const pairInstanceParser: (data: ContractEntriesResponse) => PairEntry[];
