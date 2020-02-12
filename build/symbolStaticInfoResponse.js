"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Ajv = require("ajv");
exports.symbolStaticInfoResponseSchema = {
    "id": "http://tradex.techx.vn/market/symbolStaticInfoResponse",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "description": "symbolStaticInfoResponse schema",
    "type": "object",
    "properties": {
        "s": {
            "description": "symbol code",
            "type": "string"
        },
        "n1": {
            "description": "name",
            "type": "string"
        },
        "n2": {
            "description": "english name",
            "type": "string"
        },
        "m": {
            "description": "market type",
            "type": "string",
            "enum": [
                "HOSE",
                "HNX",
                "UPCOM"
            ]
        },
        "t": {
            "description": "type: INDEX/STOCK/FUTURES/CW",
            "type": "string",
            "enum": [
                "INDEX",
                "STOCK",
                "FUTURES",
                "CW"
            ]
        },
        "re": {
            "description": "reference price",
            "type": "number"
        },
        "ce": {
            "description": "ceiling price",
            "type": "number"
        },
        "fl": {
            "description": "floor price",
            "type": "number"
        },
        "ftd": {
            "description": "first trade date (YYYYMMDD)",
            "type": "string"
        },
        "ltd": {
            "description": "last trade date (YYYYMMDD)",
            "type": "string"
        },
        "md": {
            "description": "maturity date (YYYYMMDD)",
            "type": "string"
        },
        "ud": {
            "description": "underlying symbol",
            "type": "string"
        },
        "b": {
            "description": "base code",
            "type": "string"
        },
        "bs": {
            "description": "base code securities type (INDEX/BOND)",
            "type": "string",
            "enum": [
                "INDEX",
                "BOND"
            ]
        },
        "i": {
            "description": "is highlight",
            "type": "boolean"
        }
    }
};
let symbolStaticInfoResponseAjv = null;
function symbolStaticInfoResponseValidator() {
    if (symbolStaticInfoResponseAjv == null) {
        symbolStaticInfoResponseAjv = new Ajv({ validateSchema: false }).compile(exports.symbolStaticInfoResponseSchema);
    }
    return symbolStaticInfoResponseAjv;
}
exports.symbolStaticInfoResponseValidator = symbolStaticInfoResponseValidator;
//# sourceMappingURL=symbolStaticInfoResponse.js.map