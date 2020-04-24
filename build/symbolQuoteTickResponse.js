"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Ajv = require("ajv");
exports.symbolQuoteTickResponseSchema = {
    "id": "http://tradex.techx.vn/market/symbolQuoteTickResponse",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "description": "symbolQuoteTickResponse schema",
    "type": "object",
    "properties": {
        "t": {
            "description": "time , in millisecond / 1000, like 1586933880, 10 number",
            "type": "number"
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
let symbolQuoteTickResponseAjv = null;
function symbolQuoteTickResponseValidator() {
    if (symbolQuoteTickResponseAjv == null) {
        symbolQuoteTickResponseAjv = new Ajv({ validateSchema: false }).compile(exports.symbolQuoteTickResponseSchema);
    }
    return symbolQuoteTickResponseAjv;
}
exports.symbolQuoteTickResponseValidator = symbolQuoteTickResponseValidator;
//# sourceMappingURL=symbolQuoteTickResponse.js.map