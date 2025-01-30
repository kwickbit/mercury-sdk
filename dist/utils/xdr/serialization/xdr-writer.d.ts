export declare class XdrWriter {
    private _buffer;
    private _length;
    constructor(buffer: any);
    _index: number;
    alloc(size: number): number;
    resize(minRequiredSize: number): void;
    finalize(): any;
    toArray(): any[];
    write(value: any, size: number): void;
    writeInt32BE(value: string): void;
    writeUInt32BE(value: string): void;
    writeBigInt64BE(value: string): void;
    writeBigUInt64BE(value: string): void;
    writeFloatBE(value: string): void;
    writeDoubleBE(value: string): void;
    static bufferChunkSize: number;
}
