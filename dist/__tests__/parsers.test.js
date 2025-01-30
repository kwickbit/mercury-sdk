"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parsers_1 = require("../utils/parsers");
test("it should retrieve sent payments as an array", async () => {
    const payments = {
        ok: true,
        data: {
            paymentsByPublicKey: {
                edges: [],
            },
        },
    };
    const parsedPayments = (0, parsers_1.getSentPaymentsParser)(payments.data);
    expect(parsedPayments).toEqual([]);
});
test("it should retrieve received payments as an array", async () => {
    const payments = {
        ok: true,
        data: {
            paymentsToPublicKey: {
                edges: [],
            },
        },
    };
    const parsedPayments = (0, parsers_1.getReceivedPaymentsParser)(payments.data);
    expect(parsedPayments).toEqual([]);
});
test("it should retrieve path payments strict send as an array", async () => {
    const payments = {
        ok: true,
        data: {
            pathPaymentsStrictSendByPublicKey: {
                nodes: [],
            },
        },
    };
    const parsedPayments = (0, parsers_1.getPathPaymentsStrictSendParser)(payments.data);
    expect(parsedPayments).toEqual([]);
});
test("it should retrieve path payments strict receive as an array", async () => {
    const payments = {
        ok: true,
        data: {
            pathPaymentsStrictReceiveByPublicKey: {
                nodes: [],
            },
        },
    };
    const parsedPayments = (0, parsers_1.getPathPaymentsStrictReceiveParser)(payments.data);
    expect(parsedPayments).toEqual([]);
});
test("it should retrieve liquidity pool withdraw as an array", async () => {
    const payments = {
        ok: true,
        data: {
            liquidityPoolWithdrawByPublicKey: {
                edges: [],
            },
        },
    };
    const parsedPayments = (0, parsers_1.getLiquidityPoolWithdrawParser)(payments.data);
    expect(parsedPayments).toEqual([]);
});
test("it should retrieve liquidity pool deposit as an array", async () => {
    const payments = {
        ok: true,
        data: {
            liquidityPoolDepositByPublicKey: {
                edges: [],
            },
        },
    };
    const parsedPayments = (0, parsers_1.getLiquidityPoolDepositParser)(payments.data);
    expect(parsedPayments).toEqual([]);
});
