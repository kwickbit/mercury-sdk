import { XdrPrimitiveType } from "./xdr-type";
export declare class LargeInt extends XdrPrimitiveType {
    constructor(args: any);
    /**
     * Signed/unsigned representation
     * @type {Boolean}
     * @abstract
     */
    get unsigned(): void;
    /**
     * Size of the integer in bits
     * @type {Number}
     * @abstract
     */
    get size(): void;
    /**
     * Slice integer to parts with smaller bit size
     * @param {32|64|128} sliceSize - Size of each part in bits
     * @return {BigInt[]}
     */
    slice(sliceSize: any): any[];
    toString(): any;
    toJSON(): {
        _value: any;
    };
    /**
     * @inheritDoc
     */
    static read(reader: any): LargeInt;
    /**
     * @inheritDoc
     */
    static write(value: any, writer: any): void;
    /**
     * @inheritDoc
     */
    static isValid(value: any): boolean;
    /**
     * Create instance from string
     * @param {String} string - Numeric representation
     * @return {LargeInt}
     */
    static fromString(string: any): LargeInt;
    static MAX_VALUE: bigint;
    static MIN_VALUE: bigint;
    /**
     * @internal
     * @return {void}
     */
    static defineIntBoundaries(): void;
}
