"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toSnakeCase = void 0;
const toSnakeCase = (obj) => {
    return Object.fromEntries(Object.entries(obj).map(([key, value]) => {
        const snakeKey = key.replace(/([A-Z])/g, "_$1").toLowerCase();
        return [snakeKey, value];
    }));
};
exports.toSnakeCase = toSnakeCase;
