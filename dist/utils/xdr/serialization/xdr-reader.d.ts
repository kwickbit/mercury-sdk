export declare class XdrReader {
    private _buffer;
    private _length;
    private _index;
    constructor(source: any);
    get eof(): boolean;
    advance(size: number): number;
    rewind(): void;
    read(size: number): any;
    readInt32BE(): any;
    readUInt32BE(): any;
    readBigInt64BE(): any;
    readBigUInt64BE(): any;
    readFloatBE(): any;
    readDoubleBE(): any;
    ensureInputConsumed(): void;
}
