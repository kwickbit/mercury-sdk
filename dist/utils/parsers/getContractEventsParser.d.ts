import type { GetContractEventsResponse } from "../../types";
import type { ContractEvent } from "../../types/getContractEvents";
export declare const getContractEventsParser: (data: GetContractEventsResponse) => ContractEvent[];
