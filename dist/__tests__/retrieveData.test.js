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
const Mercury_1 = require("../Mercury");
const testConfig = __importStar(require("./testConfig.json"));
require("dotenv/config");
const mercuryOptions = {
    backendEndpoint: process.env.MERCURY_BACKEND_ENDPOINT,
    graphqlEndpoint: process.env.MERCURY_GRAPHQL_ENDPOINT,
    apiKey: process.env.MERCURY_API_KEY,
};
const testnetAccount = testConfig.testnet.testnetAccounts;
test("Should retrieve sent payments as an array", async () => {
    const mercury = new Mercury_1.Mercury(mercuryOptions);
    const payments = await mercury.getSentPayments({ publicKey: testnetAccount[0].publicKey });
    expect(payments).toBeDefined();
    expect(payments.ok).toBe(true);
    expect(payments.data?.paymentsByPublicKey.edges).toBeDefined();
}, 10000);
test("Should get received payments as an array", async () => {
    const publicKey = testnetAccount[0].publicKey;
    const mercuryInstance = new Mercury_1.Mercury(mercuryOptions);
    const receivedPayments = await mercuryInstance.getReceivedPayments({ publicKey });
    expect(receivedPayments).toBeDefined();
    expect(receivedPayments.ok).toBe(true);
    expect(receivedPayments.data?.paymentsToPublicKey.edges).toBeDefined();
}, 10000);
test("Should get path payments strict send", async () => {
    const publicKey = testnetAccount[0].publicKey;
    const mercuryInstance = new Mercury_1.Mercury(mercuryOptions);
    const pathPaymentsStrictSend = await mercuryInstance.getPathPaymentsStrictSend({ publicKey });
    expect(pathPaymentsStrictSend).toBeDefined();
    expect(pathPaymentsStrictSend.ok).toBe(true);
    expect(pathPaymentsStrictSend.data?.pathPaymentsStrictSendByPublicKey.nodes).toBeDefined();
}, 10000);
test("Should get path payments strict receive", async () => {
    const publicKey = testnetAccount[0].publicKey;
    const mercuryInstance = new Mercury_1.Mercury(mercuryOptions);
    const pathPaymentsStrictReceive = await mercuryInstance.getPathPaymentsStrictReceive({
        publicKey,
    });
    expect(pathPaymentsStrictReceive).toBeDefined();
    expect(pathPaymentsStrictReceive.ok).toBe(true);
    expect(pathPaymentsStrictReceive.data?.pathPaymentsStrictReceiveByPublicKey.nodes).toBeDefined();
}, 10000);
test("Should get liquidity pool deposit as an array", async () => {
    const publicKey = testnetAccount[0].publicKey;
    const mercuryInstance = new Mercury_1.Mercury(mercuryOptions);
    const liquidityPoolDeposit = await mercuryInstance.getLiquidityPoolDeposit({ publicKey });
    expect(liquidityPoolDeposit).toBeDefined();
    expect(liquidityPoolDeposit.ok).toBe(true);
    expect(liquidityPoolDeposit.data?.liquidityPoolDepositByPublicKey.edges).toBeDefined();
}, 10000);
test("Should get liquidity pool withdraw as an array", async () => {
    const publicKey = testnetAccount[0].publicKey;
    const mercuryInstance = new Mercury_1.Mercury(mercuryOptions);
    const liquidityPoolWithdraw = await mercuryInstance.getLiquidityPoolWithdraw({ publicKey });
    expect(liquidityPoolWithdraw).toBeDefined();
    expect(liquidityPoolWithdraw.ok).toBe(true);
    expect(liquidityPoolWithdraw.data?.liquidityPoolWithdrawByPublicKey.edges).toBeDefined();
}, 10000);
test("Should get contract events as an array", async () => {
    const contractId = testConfig.testnet.factoryAddress;
    const mercuryInstance = new Mercury_1.Mercury(mercuryOptions);
    const contractEvents = await mercuryInstance.getContractEvents({ contractId });
    expect(contractEvents).toBeDefined();
    expect(contractEvents.ok).toBe(true);
    expect(contractEvents.data?.eventByContractId.nodes).toBeDefined();
}, 10000);
