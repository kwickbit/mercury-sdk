declare class XdrType {
    write: any;
    toXDR(format?: string): any;
    fromXDR(input: any, format?: string): any;
    /**
     * Check whether input contains a valid XDR-encoded value
     * @param {Buffer|String} input - XDR-encoded input data
     * @param {XdrEncodingFormat} [format] - Encoding format (one of "raw", "hex", "base64")
     * @return {Boolean}
     */
    validateXDR(input: any, format?: string): boolean;
    /**
     * Encode value to XDR format
     * @param {this} value - Value to serialize
     * @param {XdrEncodingFormat} [format] - Encoding format (one of "raw", "hex", "base64")
     * @return {Buffer}
     */
    static toXDR(value: any, format?: string): any;
    /**
     * Decode XDR-encoded value
     * @param {Buffer|String} input - XDR-encoded input data
     * @param {XdrEncodingFormat} [format] - Encoding format (one of "raw", "hex", "base64")
     * @return {this}
     */
    static fromXDR(input: any, format?: string): any;
    /**
     * Check whether input contains a valid XDR-encoded value
     * @param {Buffer|String} input - XDR-encoded input data
     * @param {XdrEncodingFormat} [format] - Encoding format (one of "raw", "hex", "base64")
     * @return {Boolean}
     */
    static validateXDR(input: any, format?: string): boolean;
}
export declare class XdrPrimitiveType extends XdrType {
    /**
     * Read value from the XDR-serialized input
     * @param {XdrReader} reader - XdrReader instance
     * @return {this}
     * @abstract
     */
    static read(reader: any): void;
    /**
     * Write XDR value to the buffer
     * @param {this} value - Value to write
     * @param {XdrWriter} writer - XdrWriter instance
     * @return {void}
     * @abstract
     */
    static write(value: any, writer: any): void;
    /**
     * Check whether XDR primitive value is valid
     * @param {this} value - Value to check
     * @return {Boolean}
     * @abstract
     */
    static isValid(value: any): boolean;
}
export declare class XdrCompositeType extends XdrType {
    /**
     * Check whether XDR primitive value is valid
     * @param {this} value - Value to check
     * @return {Boolean}
     * @abstract
     */
    isValid(value: any): boolean;
}
export {};
/**
 * @typedef {'raw'|'hex'|'base64'} XdrEncodingFormat
 */
