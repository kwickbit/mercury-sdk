"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.I128 = void 0;
const large_int_1 = require("./large-int");
class I128 extends large_int_1.LargeInt {
    constructor(...args) {
        super(args);
    }
    get unsigned() {
        return false;
    }
    get size() {
        return 128;
    }
}
exports.I128 = I128;
I128.defineIntBoundaries();
