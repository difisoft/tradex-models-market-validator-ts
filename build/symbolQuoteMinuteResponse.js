"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.symbolQuoteMinuteResponseValidator = exports.symbolQuoteMinuteResponseSchema = void 0;
const Ajv = require("ajv");
exports.symbolQuoteMinuteResponseSchema = {
    "id": "http://tradex.techx.vn/market/symbolQuoteMinuteResponse",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "description": "symbolQuoteMinuteResponse schema",
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
        "pv": {
            "description": "period trading volume",
            "type": "number"
        }
    }
};
let symbolQuoteMinuteResponseAjv = null;
function symbolQuoteMinuteResponseValidator() {
    if (symbolQuoteMinuteResponseAjv == null) {
        symbolQuoteMinuteResponseAjv = new Ajv({ validateSchema: false }).compile(exports.symbolQuoteMinuteResponseSchema);
    }
    return symbolQuoteMinuteResponseAjv;
}
exports.symbolQuoteMinuteResponseValidator = symbolQuoteMinuteResponseValidator;
//# sourceMappingURL=symbolQuoteMinuteResponse.js.map