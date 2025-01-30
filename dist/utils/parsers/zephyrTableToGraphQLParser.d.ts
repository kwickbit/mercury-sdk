import type { ZephyrTableOriginal, ZephyrTableGraphQL } from "../../types";
/**
 * Parses ZephyrTableOriginal to ZephyrTableGraphQL
 * @param data - ZephyrTableOriginal
 * @returns ZephyrTableGraphQL
 * @throws Will throw an error if the address is invalid
 * @beta
 * @example
 * ```ts
 * const data: ZephyrTableOriginal = {
 *  address: "zephyr_979734a56cb32104e44245cc51e5336e"
 * }
 * const parsedData = zephyrTableToGraphQLParser(data);
 * console.log(parsedData);
 * // Output: { address: "allZephyr979734A56Cb32104E44245Cc51E5336Es" }
 * ```
 */
export declare const zephyrTableToGraphQLParser: (data: ZephyrTableOriginal) => ZephyrTableGraphQL;
