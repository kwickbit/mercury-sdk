"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
require("dotenv/config");
const mercuryOptions = {
    backendEndpoint: process.env.MERCURY_BACKEND_ENDPOINT,
    graphqlEndpoint: process.env.MERCURY_GRAPHQL_ENDPOINT,
    apiKey: process.env.MERCURY_API_KEY,
};
test(".env Should have valid data", () => {
    const backendEndpoint = process.env.MERCURY_BACKEND_ENDPOINT;
    const graphqlEndpoint = process.env.MERCURY_GRAPHQL_ENDPOINT;
    const apiKey = process.env.MERCURY_API_KEY;
    expect(backendEndpoint).toBeDefined();
    expect(graphqlEndpoint).toBeDefined();
    expect(apiKey).toBeDefined();
    const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
    expect(backendEndpoint).toMatch(urlRegex);
    expect(graphqlEndpoint).toMatch(urlRegex);
    // Check that the backend endpoint doesn't contain a port number
    expect(backendEndpoint).not.toMatch(/:\d+$/);
});
test("Should return a new instance of Mercury", () => {
    const mercury = new index_1.Mercury(mercuryOptions);
    expect(mercury).toBeInstanceOf(index_1.Mercury);
});
