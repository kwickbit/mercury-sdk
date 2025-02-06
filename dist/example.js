"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mercury_1 = require("./Mercury");
require("dotenv/config");
(async function () {
    const mercuryArgs = {
        // Make sure all of these variables are set in your `.env` file!
        backendEndpoint: process.env.MERCURY_BACKEND_ENDPOINT,
        graphqlEndpoint: process.env.MERCURY_GRAPHQL_ENDPOINT,
        apiKey: process.env.MERCURY_API_KEY,
    };
    const mercuryInstance = new Mercury_1.Mercury(mercuryArgs);
    const publicKey = "CBWBMT446XONZMZIDEFGAPQHSAUKC5EY6PCPUJWBE3NYDL73RSYUWYDQ";
    const publicKey2 = "GBNMAM4CAWHSMMTHD5SNG3ACXWOWNKQLCHXWZVE6EQB7Q26SZM6Z6JCQ";
    const routerContractAddress = "CAG5LRYQ5JVEUI5TEID72EYOVX44TTUJT5BQR2J6J77FH65PCCFAJDDH";
    const subscriptions = await mercuryInstance.getAllContractEventSubscriptions();
    console.log(`${subscriptions.data?.allContractEventSubscriptions.edges.length} subscriptions`);
    const routerEvents = await mercuryInstance.getContractEvents({ contractId: routerContractAddress });
    console.log(`${routerEvents.data?.eventByContractId.nodes.length} events`);
    // const sentPaymentsResponse = await mercuryInstance.getSentPayments({
    //   publicKey,
    // });
    // if (sentPaymentsResponse.ok) {
    //   const sentPaymentsParsedData = getSentPaymentsParser(sentPaymentsResponse.data!);
    //   console.log("sentPaymentsParsedData");
    //   console.log(JSON.stringify(sentPaymentsParsedData, null, 2) + "\n");
    // }
    // //Received payments
    // const receivedPaymentsResponse = await mercuryInstance.getReceivedPayments({
    //   publicKey,
    // });
    // if (receivedPaymentsResponse.ok) {
    //   const receivedPaymentsParsedData = getReceivedPaymentsParser(receivedPaymentsResponse.data!);
    //   console.log("receivedPaymentsParsedData");
    //   console.log(JSON.stringify(receivedPaymentsParsedData, null, 2) + "\n");
    // }
    // //Liquidity Pool Withdraw
    // const liquidityPoolWithdrawResponse = await mercuryInstance.getLiquidityPoolWithdraw({
    //   publicKey: publicKey2,
    // });
    // if (liquidityPoolWithdrawResponse.ok) {
    //   const liquidityPoolWithdrawParsedData = getLiquidityPoolWithdrawParser(
    //     liquidityPoolWithdrawResponse.data!,
    //   );
    //   console.log("liquidityPoolWithdrawParsedData");
    //   console.log(JSON.stringify(liquidityPoolWithdrawParsedData, null, 2) + "\n");
    // }
    // //Liquidity Pool Deposit
    // const liquidityPoolDepositResponse = await mercuryInstance.getLiquidityPoolDeposit({
    //   publicKey,
    // });
    // if (liquidityPoolDepositResponse.ok) {
    //   const liquidityPoolDepositParsedData = getLiquidityPoolDepositParser(
    //     liquidityPoolDepositResponse.data!,
    //   );
    //   console.log("liquidityPoolDepositParsedData");
    //   console.log(JSON.stringify(liquidityPoolDepositParsedData, null, 2) + "\n");
    // }
    // const getContractEventsRes = await mercuryInstance.getContractEvents({
    //   contractId: routerContractAddress,
    // });
    // const parsedContractEvents = getContractEventsParser(getContractEventsRes.data!);
    // const eventByPublicKey = parsedContractEvents.filter((event) => event.to === publicKey);
    // console.log("eventByPublicKey");
    // console.log(JSON.stringify(eventByPublicKey, null, 2) + "\n");
})();
