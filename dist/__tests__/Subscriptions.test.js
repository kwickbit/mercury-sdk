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
const mercuryInstance = new Mercury_1.Mercury(mercuryOptions);
test("Should subscribe to conract events successfully", async () => {
    const args = {
        contractId: testConfig.testnet.factoryAddress,
    };
    const subscribe = (await mercuryInstance
        .subscribeToContractEvents(args)
        .catch((err) => {
        console.error(err);
        return { ok: false, data: false };
    }));
    expect(subscribe.ok).toBeTruthy();
    expect(subscribe.data).toBeTruthy();
}, 10000);
test("Should subscribe to a stellar account successfully", async () => {
    const stellarAddress = "GAB7X5"; // replace with a valid stellar address
    const args = {
        publicKey: stellarAddress,
    };
    const subscribe = (await mercuryInstance
        .subscribeToFullAccount(args)
        .catch((err) => {
        console.error(err);
        return { ok: false, data: false };
    }));
    expect(subscribe.ok).toBeTruthy();
    expect(subscribe.data).toBeTruthy();
}, 10000);
test("Should subscribe to ledger entries successfully", async () => {
    const args = {
        contractId: testConfig.testnet.factoryAddress,
        keyXdr: "AAAAFA==",
        durability: "persistent",
        hydrate: true,
    };
    const subscribe = (await mercuryInstance
        .subscribeToLedgerEntries(args)
        .catch((err) => {
        console.error(err);
        return { ok: false, data: false };
    }));
    expect(subscribe.ok).toBeTruthy();
    expect(subscribe.data).toBeTruthy();
}, 10000);
test("Should return all contract event subscriptions", async () => {
    const subscriptions = await mercuryInstance
        .getAllContractEventSubscriptions()
        .catch((err) => {
        console.error(err);
        return { ok: false, data: null };
    });
    const data = subscriptions.data;
    expect(subscriptions.ok).toBeTruthy();
    expect(data).toBeDefined();
    if (data) {
        expect(data.allContractEventSubscriptions).toBeDefined();
        expect(data.allContractEventSubscriptions.edges).toBeDefined();
        expect(data.allContractEventSubscriptions.edges.length).toBeGreaterThan(0);
    }
}, 10000);
test("Should get full account subscriptions successfully", async () => {
    const subscriptions = await mercuryInstance
        .getAllFullAccountSubscriptions()
        .catch((err) => {
        console.error(err);
        return { ok: false, data: null };
    });
    const data = subscriptions.data;
    expect(subscriptions.ok).toBeTruthy();
    expect(data).toBeDefined();
    if (data) {
        expect(data.allFullAccountSubscriptions).toBeDefined();
        expect(data.allFullAccountSubscriptions.edges).toBeDefined();
        expect(data.allFullAccountSubscriptions.edges.length).toBeGreaterThan(0);
    }
}, 10000);
