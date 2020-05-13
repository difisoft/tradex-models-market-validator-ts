"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.topForeignerTradingResponseValidator = exports.topForeignerTradingResponseSchema = void 0;
const Ajv = require("ajv");
exports.topForeignerTradingResponseSchema = {
    "id": "http://tradex.techx.vn/market/topForeignerTradingResponse",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "description": "topForeignerTradingResponse schema",
    "type": "object",
    "properties": {
        "s": {
            "description": "symbol code",
            "type": "string"
        },
        "mt": {
            "description": "marketType",
            "type": "string"
        },
        "o": {
            "description": "open",
            "type": "number"
        },
        "h": {
            "description": "high",
            "type": "number"
        },
        "l": {
            "description": "low",
            "type": "number"
        },
        "c": {
            "description": "last",
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
            "description": "trading Volume",
            "type": "number"
        },
        "va": {
            "description": "trading Value",
            "type": "number"
        },
        "fbv": {
            "description": "foreigner buy value",
            "type": "number"
        },
        "fsv": {
            "description": "foreigner sell value",
            "type": "number"
        },
        "fnv": {
            "description": "foreigner net trading value (buy value - sell value)",
            "type": "number"
        }
    }
};
let topForeignerTradingResponseAjv = null;
function topForeignerTradingResponseValidator() {
    if (topForeignerTradingResponseAjv == null) {
        topForeignerTradingResponseAjv = new Ajv({ validateSchema: false }).compile(exports.topForeignerTradingResponseSchema);
    }
    return topForeignerTradingResponseAjv;
}
exports.topForeignerTradingResponseValidator = topForeignerTradingResponseValidator;
//# sourceMappingURL=topForeignerTradingResponse.js.map