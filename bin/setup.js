#!/usr/bin/env node
const { createInterface } = require("readline/promises");
const { writeFile } = require("fs/promises");
const { Mercury } = require("../dist/index.js");
require("dotenv/config");

async function setup() {
    let jwt = process.env.MERCURY_JWT;

    if (!jwt) {
        const rl = createInterface({ input: process.stdin, output: process.stdout });

        jwt = await rl.question(
            '\nTo generate an API key, please enter your Mercury JWT.\nYou can find it in your Mercury dashboard under "Get access token": ',
        );

        rl.close();
    }

    try {
        const mercury = new Mercury({
            backendEndpoint: process.env.MERCURY_BACKEND_ENDPOINT,
            graphqlEndpoint: process.env.MERCURY_GRAPHQL_ENDPOINT,
            shouldFetchApiKey: true,
            jwt,
        });

        const key = await mercury.generateApiKey();
        await writeFile(".env", `\nMERCURY_API_KEY=${key}`, { flag: "a" });
        console.log("API key saved to .env file");
    } catch (error) {
        console.error('Failed:', error.message);
        process.exit(1);
    }
}

setup();
