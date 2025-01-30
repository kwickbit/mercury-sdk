"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCustomQuery = void 0;
const graphql_request_1 = require("graphql-request");
const getCustomQuery = (query) => {
    return (0, graphql_request_1.gql) `
    ${query}
  `;
};
exports.getCustomQuery = getCustomQuery;
