export declare class XdrWriterError extends TypeError {
    constructor(message: string);
}
export declare class XdrReaderError extends TypeError {
    constructor(message: string);
}
export declare class XdrDefinitionError extends TypeError {
    constructor(message: string);
}
export declare class XdrNotImplementedDefinitionError extends XdrDefinitionError {
    constructor();
}
