import type { ContractEntriesResponse, ParsedRouterEntry } from "../../types";
/**
 * Parses the data from a ContractEntriesResponse object and returns an array of ParsedRouterEntry objects.
 * @param data The ContractEntriesResponse object to be parsed.
 * @returns An array of ParsedRouterEntry objects.
 * @throws Error if no entries are provided or if no valueXdr is found in an entry.
 */
export declare const factoryInstanceParser: (data: ContractEntriesResponse) => ParsedRouterEntry[];
