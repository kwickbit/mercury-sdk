"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XdrNotImplementedDefinitionError = exports.XdrDefinitionError = exports.XdrReaderError = exports.XdrWriterError = void 0;
class XdrWriterError extends TypeError {
    constructor(message) {
        super(`XDR Write Error: ${message}`);
    }
}
exports.XdrWriterError = XdrWriterError;
class XdrReaderError extends TypeError {
    constructor(message) {
        super(`XDR Read Error: ${message}`);
    }
}
exports.XdrReaderError = XdrReaderError;
class XdrDefinitionError extends TypeError {
    constructor(message) {
        super(`XDR Type Definition Error: ${message}`);
    }
}
exports.XdrDefinitionError = XdrDefinitionError;
class XdrNotImplementedDefinitionError extends XdrDefinitionError {
    constructor() {
        super(`method not implemented, it should be overloaded in the descendant class.`);
    }
}
exports.XdrNotImplementedDefinitionError = XdrNotImplementedDefinitionError;
