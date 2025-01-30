"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseXdr = exports.hexToString = exports.stellarAssetId = exports.u128ToScVal = exports.i128ToScVal = exports.addressToScVal = exports.scValToJs = exports.scValStrToJs = exports.strToScVal = exports.scvalToBigInt = exports.decodei128ScVal = void 0;
const stellar_sdk_1 = require("@stellar/stellar-sdk");
const buffer_1 = require("buffer");
const bigint_conversion_1 = require("bigint-conversion");
const xdr_1 = require("./xdr");
const decodei128ScVal = (value) => {
    try {
        return new xdr_1.I128([
            BigInt(value.i128().lo().low),
            BigInt(value.i128().lo().high),
            BigInt(value.i128().hi().low),
            BigInt(value.i128().hi().high),
        ]).toString();
    }
    catch (error) {
        return 0;
    }
};
exports.decodei128ScVal = decodei128ScVal;
function scvalToBigInt(scval) {
    switch (scval?.switch()) {
        case undefined: {
            return BigInt(0);
        }
        case stellar_sdk_1.xdr.ScValType.scvU64(): {
            const { high, low } = scval.u64();
            return (0, bigint_conversion_1.bufToBigint)(new Uint32Array([high, low]));
        }
        case stellar_sdk_1.xdr.ScValType.scvI64(): {
            const { high, low } = scval.i64();
            return (0, bigint_conversion_1.bufToBigint)(new Int32Array([high, low]));
        }
        case stellar_sdk_1.xdr.ScValType.scvU128(): {
            const parts = scval.u128();
            const a = parts.hi();
            const b = parts.lo();
            return (0, exports.decodei128ScVal)(scval);
            // return bufToBigint(new Uint32Array([a.high, a.low, b.high, b.low]));
        }
        case stellar_sdk_1.xdr.ScValType.scvI128(): {
            const parts = scval.i128();
            const a = parts.hi();
            const b = parts.lo();
            return (0, exports.decodei128ScVal)(scval);
            // return bufToBigint(new Int32Array([a.high, a.low, b.high, b.low]));
        }
        default: {
            throw new Error(`Invalid type for scvalToBigInt: ${scval?.switch().name}`);
        }
    }
}
exports.scvalToBigInt = scvalToBigInt;
function strToScVal(base64Xdr) {
    return stellar_sdk_1.xdr.ScVal.fromXDR(buffer_1.Buffer.from(base64Xdr, "base64"));
}
exports.strToScVal = strToScVal;
function scValStrToJs(base64Xdr) {
    return scValToJs(strToScVal(base64Xdr));
}
exports.scValStrToJs = scValStrToJs;
function scValToJs(val) {
    switch (val?.switch()) {
        case stellar_sdk_1.xdr.ScValType.scvBool(): {
            return val.b();
        }
        case stellar_sdk_1.xdr.ScValType.scvVoid():
        case undefined: {
            return 0;
        }
        case stellar_sdk_1.xdr.ScValType.scvU32(): {
            return val.u32();
        }
        case stellar_sdk_1.xdr.ScValType.scvI32(): {
            return val.i32();
        }
        case stellar_sdk_1.xdr.ScValType.scvU64():
        case stellar_sdk_1.xdr.ScValType.scvI64():
        case stellar_sdk_1.xdr.ScValType.scvU128():
        case stellar_sdk_1.xdr.ScValType.scvI128():
        case stellar_sdk_1.xdr.ScValType.scvU256():
        case stellar_sdk_1.xdr.ScValType.scvI256(): {
            return scvalToBigInt(val);
        }
        case stellar_sdk_1.xdr.ScValType.scvAddress(): {
            return stellar_sdk_1.Address.fromScVal(val).toString();
        }
        case stellar_sdk_1.xdr.ScValType.scvString(): {
            return val.str().toString();
        }
        case stellar_sdk_1.xdr.ScValType.scvSymbol(): {
            return val.sym().toString();
        }
        case stellar_sdk_1.xdr.ScValType.scvBytes(): {
            return val.bytes();
        }
        case stellar_sdk_1.xdr.ScValType.scvVec(): {
            return val?.vec()?.map((v) => scValToJs(v));
        }
        case stellar_sdk_1.xdr.ScValType.scvMap(): {
            let res = {};
            val?.map()?.forEach((e) => {
                let key = scValToJs(e.key());
                let value;
                let v = e.val();
                // For now we assume second level maps are real maps. Not perfect but better.
                switch (v?.switch()) {
                    case stellar_sdk_1.xdr.ScValType.scvMap(): {
                        let inner_map = new Map();
                        v?.map()?.forEach((e) => {
                            let key = scValToJs(e.key());
                            let value = scValToJs(e.val());
                            inner_map.set(key, value);
                        });
                        value = inner_map;
                        break;
                    }
                    default: {
                        value = scValToJs(e.val());
                    }
                }
                //@ts-ignore
                res[key] = value;
            });
            return res;
        }
        case stellar_sdk_1.xdr.ScValType.scvContractInstance():
            return val.instance();
        case stellar_sdk_1.xdr.ScValType.scvLedgerKeyNonce():
            return val.nonceKey();
        case stellar_sdk_1.xdr.ScValType.scvTimepoint():
            return val.timepoint();
        case stellar_sdk_1.xdr.ScValType.scvDuration():
            return val.duration();
        // TODO: Add this case when merged
        // case xdr.ScValType.scvError():
        default: {
            throw new Error(`type not implemented yet: ${val?.switch().name}`);
        }
    }
}
exports.scValToJs = scValToJs;
function addressToScVal(addr) {
    let addrObj = stellar_sdk_1.Address.fromString(addr);
    return addrObj.toScVal();
}
exports.addressToScVal = addressToScVal;
function i128ToScVal(i) {
    return stellar_sdk_1.xdr.ScVal.scvI128(new stellar_sdk_1.xdr.Int128Parts({
        lo: stellar_sdk_1.xdr.Uint64.fromString((i & BigInt(0xffffffffffffffffn)).toString()),
        hi: stellar_sdk_1.xdr.Int64.fromString(((i >> BigInt(64)) & BigInt(0xffffffffffffffffn)).toString()),
    }));
}
exports.i128ToScVal = i128ToScVal;
function u128ToScVal(i) {
    return stellar_sdk_1.xdr.ScVal.scvU128(new stellar_sdk_1.xdr.UInt128Parts({
        lo: stellar_sdk_1.xdr.Uint64.fromString((i & BigInt(0xffffffffffffffffn)).toString()),
        hi: stellar_sdk_1.xdr.Int64.fromString(((i >> BigInt(64)) & BigInt(0xffffffffffffffffn)).toString()),
    }));
}
exports.u128ToScVal = u128ToScVal;
function stellarAssetId(codeHex, issuer) {
    if (codeHex == undefined || issuer == undefined)
        return undefined;
    const code = hexToString(codeHex.slice(2));
    return `${code}:${issuer}`;
}
exports.stellarAssetId = stellarAssetId;
function hexToString(hex) {
    const convertedString = hex
        .match(/.{1,2}/g) // Split the string into pairs of characters
        .map((byte) => String.fromCharCode(parseInt(byte, 16))) // Convert each pair to its corresponding character code
        .join(""); // Join the characters into a single string
    const trimmedString = convertedString.replace(/\0+$/, ""); // Remove trailing zeros
    return trimmedString;
}
exports.hexToString = hexToString;
function parseXdr(valueToParse) {
    return scValToJs(stellar_sdk_1.xdr.ScVal.fromXDR(valueToParse, "base64"));
}
exports.parseXdr = parseXdr;
