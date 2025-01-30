"use strict";
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.LargeInt = void 0;
const xdr_type_1 = require("./xdr-type");
const bigint_encoder_1 = require("./bigint-encoder");
const errors_1 = require("./errors");
/* eslint-disable */
/* tslint:disable */
class LargeInt extends xdr_type_1.XdrPrimitiveType {
    constructor(args) {
        super();
        this._value = (0, bigint_encoder_1.encodeBigIntFromBits)(args, this.size, this.unsigned);
    }
    /**
     * Signed/unsigned representation
     * @type {Boolean}
     * @abstract
     */
    get unsigned() {
        throw new errors_1.XdrNotImplementedDefinitionError();
    }
    /**
     * Size of the integer in bits
     * @type {Number}
     * @abstract
     */
    get size() {
        throw new errors_1.XdrNotImplementedDefinitionError();
    }
    /**
     * Slice integer to parts with smaller bit size
     * @param {32|64|128} sliceSize - Size of each part in bits
     * @return {BigInt[]}
     */
    slice(sliceSize) {
        return (0, bigint_encoder_1.sliceBigInt)(this._value, this.size, sliceSize);
    }
    toString() {
        return this._value.toString();
    }
    toJSON() {
        return { _value: this._value.toString() };
    }
    /**
     * @inheritDoc
     */
    static read(reader) {
        const { size } = this.prototype;
        if (size === 64)
            return new this(reader.readBigUInt64BE());
        return new this(...Array.from({ length: size / 64 }, () => reader.readBigUInt64BE()).reverse());
    }
    /**
     * @inheritDoc
     */
    static write(value, writer) {
        if (value instanceof this) {
            value = value._value;
        }
        else if (typeof value !== "bigint" || value > this.MAX_VALUE || value < this.MIN_VALUE)
            throw new errors_1.XdrWriterError(`${value} is not a ${this.name}`);
        const { unsigned, size } = this.prototype;
        if (size === 64) {
            if (unsigned) {
                writer.writeBigUInt64BE(value);
            }
            else {
                writer.writeBigInt64BE(value);
            }
        }
        else {
            for (const part of (0, bigint_encoder_1.sliceBigInt)(value, size, 64).reverse()) {
                if (unsigned) {
                    writer.writeBigUInt64BE(part);
                }
                else {
                    writer.writeBigInt64BE(part);
                }
            }
        }
    }
    /**
     * @inheritDoc
     */
    static isValid(value) {
        return typeof value === "bigint" || value instanceof this;
    }
    /**
     * Create instance from string
     * @param {String} string - Numeric representation
     * @return {LargeInt}
     */
    static fromString(string) {
        return new this(string);
    }
    /**
     * @internal
     * @return {void}
     */
    static defineIntBoundaries() {
        const [min, max] = (0, bigint_encoder_1.calculateBigIntBoundaries)(this.prototype.size, this.prototype.unsigned);
        this.MIN_VALUE = min;
        this.MAX_VALUE = max;
    }
}
exports.LargeInt = LargeInt;
LargeInt.MAX_VALUE = 0n;
LargeInt.MIN_VALUE = 0n;
