import type { ApiResponse, GetPathPaymentsStrictSendByPublicKeyResponse, GetPathPaymentsStrictReceiveByPublicKeyResponse, GetReceivedPaymentsResponse, GetSentPaymentsResponse, LiquidityPoolDepositByPublicKeyResponse, SubscribeToFullAccountArgs, SubscribeToLedgerEntriesArgs, SubscribeToLedgerEntriesExpirationArgs, LiquidityPoolWithdrawByPublicKeyResponse, GetContractEventsResponse, GetAllContractEventSubscriptionsResponse, GetAllFullAccountSubscriptionsResponse, ContractEntriesResponse, SubscribeToMultipleLedgerEntriesArgs } from "./types";
import type { SubscribeToContractEventsArgs } from "./types/subscriptions";
interface MercuryOptions {
    backendEndpoint: string;
    graphqlEndpoint: string;
    defaultMaxSingleSize?: number;
    shouldFetchApiKey?: boolean;
    jwt?: string;
    apiKey?: string;
    debugGraphqlRequest?: boolean;
    debugGraphqlResponse?: boolean;
}
export declare class Mercury {
    private readonly _backendEndpoint;
    private readonly _graphqlClient;
    private readonly _defaultMaxSingleSize;
    private _accessToken;
    /**
     * Constructs a Mercury instance with given configuration options.
     * @param options Configuration options for the Mercury instance.
     *  - backendEndpoint: URL of the backend endpoint.
     *  - graphqlEndpoint: URL of the graphql endpoint.
     *  - defaultMaxSingleSize (optional): Default max single size for subscriptions.
     *    If not provided, the default value is 2000.
     *  - shouldFetchApiKey (optional): Whether to fetch an API key from the server or not.
     *    If not provided, it is left undefined.
     *  - jwt (optional): JWT token for fetching an API key. Must be provided if shouldFetchApiKey is true.
     *  - apiKey (optional): API key for the Mercury account. Must always be provided, except in the
     *    post-install script, which is where the key is fetched to begin with.
     */
    constructor(options: MercuryOptions);
    private _configureGraphqlClient;
    /**
     * Generates a new API key for the Mercury account.
     * @returns The new API key.
     */
    generateApiKey(): Promise<string>;
    /**
     * Useful for creating request bodies in snake case for the Mercury backend.
     * @param methodArgs Arguments specific to the method.
     * @param defaultArgs Default arguments to be combined.
     * @returns The combined arguments in snake case.
     */
    private _createRequestBody;
    /**
     * Generic method to make a backend request.
     * @param args Object containing the following properties:
     * - method HTTP method (GET, POST, PUT, DELETE).
     * - url Endpoint URL.
     * - body Request body.
     * @returns ApiResponse with data or error information.
     */
    private _backendRequest;
    /**
     * Generic method to make a graphql request.
     * @param args Object containing the following properties:
     *  - body: Request body.
     *    - request: GraphQL request.
     *    - variables: GraphQL variables.
     *  - headers: Request headers.
     * @returns ApiResponse with data or error information.
     */
    private _graphqlRequest;
    /**
     * Create a new subscription to a contract event
     * @param args Arguments for the subscription:
     *   - contractId: ID of the contract to subscribe to.
     *   - maxSingleSize (optional): How much will one event cost at most (default: 2000)
     *   - topic1, topic2, topic3, topic4 (optional): Topics to filter the events.
     * @returns Subscription result.
     */
    subscribeToContractEvents(args: SubscribeToContractEventsArgs): Promise<ApiResponse<any>>;
    /**
     * Subscribes to the full account details.
     * @param args Arguments for the subscription:
     *   - publicKey: Public key of the account to subscribe to.
     * @returns Subscription result.
     */
    subscribeToFullAccount(args: SubscribeToFullAccountArgs): Promise<ApiResponse<any>>;
    /**
     * Create a new subscription to a ledger entry. This is especially useful in scenarios where events alone don't give you enough context.
     * @param args Arguments for the subscription:
     *   - contractId: ID of the contract.
     *   - keyXdr: Entry key as base64 xdr.
     *   - durability: Durability of the entry.
     *   - maxSingleSize (optional): How much will one event cost at most (default: 2000)
     * @returns Subscription result.
     */
    subscribeToLedgerEntries(args: SubscribeToLedgerEntriesArgs): Promise<void | ApiResponse<any>>;
    /**
     * Subscribes to multiple ledger entries.
     *
     * @param args - The arguments for subscribing to multiple ledger entries.
     * @returns An array of results for each subscribed ledger entry.
     */
    subscribeToMultipleLedgerEntries(args: SubscribeToMultipleLedgerEntriesArgs): Promise<ApiResponse<any>[]>;
    /**
     * Subscribes to the expiration of ledger entries.
     * @param args Arguments for the subscription:
     *   - hashXdr: Base64 xdr of your entry's hash
     * @returns Subscription result.
     */
    subscribeToLedgerEntriesExpiration(args: SubscribeToLedgerEntriesExpirationArgs): Promise<ApiResponse<any>>;
    /**
     * Retrieves sent payments.
     * @param args Arguments for the query:
     *  - publicKey: Public key of the account to retrieve sent payments from.
     * @returns The result of the getSentPayments GraphQL query.
     */
    getSentPayments(args: {
        publicKey: string;
    }): Promise<ApiResponse<GetSentPaymentsResponse>>;
    /**
     * Retrieves received payments.
     * @param args Arguments for the query:
     * - publicKey: Public key of the account to retrieve received payments from.
     * @returns Received payments of given public key.
     */
    getReceivedPayments(args: {
        publicKey: string;
    }): Promise<ApiResponse<GetReceivedPaymentsResponse>>;
    /**
     * @param args Arguments for the query:
     * - publicKey: Public key of the account to retrieve path payments strict send from.
     * @returns Path payments strict send by public key.
     */
    getPathPaymentsStrictSend(args: {
        publicKey: string;
    }): Promise<ApiResponse<GetPathPaymentsStrictSendByPublicKeyResponse>>;
    /**
     * @param args Arguments for the query:
     * - publicKey: Public key of the account to retrieve path payments strict receive from.
     * @returns Path payments strict receive by public key.
     */
    getPathPaymentsStrictReceive(args: {
        publicKey: string;
    }): Promise<ApiResponse<GetPathPaymentsStrictReceiveByPublicKeyResponse>>;
    /**
     * @param args Arguments for the query:
     * - publicKey: Public key of the account to retrieve liquidity pool withdraw from.
     * @returns Liquidity pool withdraw by public key.
     */
    getLiquidityPoolWithdraw(args: {
        publicKey: string;
    }): Promise<ApiResponse<LiquidityPoolWithdrawByPublicKeyResponse>>;
    /**
     * @param args Arguments for the query:
     * - publicKey: Public key of the account to retrieve liquidity pool deposit from.
     * @returns Liquidity pool deposit by public key.
     */
    getLiquidityPoolDeposit(args: {
        publicKey: string;
    }): Promise<ApiResponse<LiquidityPoolDepositByPublicKeyResponse>>;
    /**
     * @returns All contracts event subscriptions.
     */
    getAllContractEventSubscriptions(): Promise<ApiResponse<GetAllContractEventSubscriptionsResponse>>;
    /**
     * @returns All full account subscriptions.
     */
    getAllFullAccountSubscriptions(): Promise<ApiResponse<GetAllFullAccountSubscriptionsResponse>>;
    /**
     * @param args Arguments for the query:
     * - contractId: Contract ID to retrieve subscriptions from.
     * @returns Events the contract is subscribed to.
     */
    getContractEvents(args: {
        contractId: string;
    }): Promise<ApiResponse<GetContractEventsResponse>>;
    /**
     * Retrieves all factory contract data based on the provided contract ID.
     * @param args - The arguments for the request.
     * @param args.contractId - The ID of the factory contract.
     * @returns A promise that resolves to the response containing the factory contract data.
     */
    getContractEntries(args: {
        contractId: string;
    }): Promise<ApiResponse<ContractEntriesResponse>>;
    /**
     * Executes a custom GrapihQL query.
     * @param args - The query request and optional variables.
     * @returns A promise that resolves to the result of the query.
     */
    getCustomQuery(args: {
        request: string;
        variables?: any;
    }): Promise<ApiResponse<any>>;
    /**
     * Calls a specific serverless function with the provided arguments.
     * @param args Object containing the following properties:
     *  - functionName: Name of the serverless function to call.
     *  - arguments: Arguments to be passed to the function in object format.
     * @returns ApiResponse with data or error information.
     */
    callServerlessFunction(args: {
        functionName: string;
        arguments: Object;
    }): Promise<ApiResponse<any>>;
}
export {};
