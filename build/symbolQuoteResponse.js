"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.symbolQuoteResponseValidator = exports.symbolQuoteResponseSchema = void 0;
const Ajv = require("ajv");
exports.symbolQuoteResponseSchema = {
    "id": "http://tradex.techx.vn/market/symbolQuoteResponse",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "description": "symbolQuoteResponse schema",
    "type": "object",
    "properties": {
        "t": {
            "description": "time (yyyyMMddhhmmss)",
            "type": "string"
        },
        "o": {
            "description": "open price",
            "type": "number"
        },
        "h": {
            "description": "high price",
            "type": "number"
        },
        "l": {
            "description": "low price",
            "type": "number"
        },
        "c": {
            "description": "close price",
            "type": "number"
        },
        "ch": {
            "description": "change",
            "type": "number"
        },
        "ra": {
            "description": "rate",
            "type": "number"
        },
        "vo": {
            "description": "trading volume",
            "type": "number"
        },
        "va": {
            "description": "trading value",
            "type": "number"
        },
        "mv": {
            "description": "matching volume",
            "type": "number"
        },
        "se": {
            "description": "sequence",
            "type": "number"
        },
        "mb": {
            "description": "matched by",
            "type": "string"
        },
        "cf": {
            "description": "ceiling floor equal",
            "type": "string"
        }
    }
};
let symbolQuoteResponseAjv = null;
function symbolQuoteResponseValidator() {
    if (symbolQuoteResponseAjv == null) {
        symbolQuoteResponseAjv = new Ajv({ validateSchema: false }).compile(exports.symbolQuoteResponseSchema);
    }
    return symbolQuoteResponseAjv;
}
exports.symbolQuoteResponseValidator = symbolQuoteResponseValidator;
//# sourceMappingURL=symbolQuoteResponse.js.map