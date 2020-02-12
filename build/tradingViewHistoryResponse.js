"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Ajv = require("ajv");
exports.tradingViewHistoryResponseSchema = {
    "id": "http://tradex.techx.vn/market/tradingViewHistoryResponse",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "description": "tradingViewHistoryResponse schema",
    "type": "object",
    "properties": {
        "t": {
            "description": "time",
            "type": "array",
            "items": {
                "type": "number"
            }
        },
        "o": {
            "description": "open",
            "type": "array",
            "items": {
                "type": "number"
            }
        },
        "h": {
            "description": "high",
            "type": "array",
            "items": {
                "type": "number"
            }
        },
        "l": {
            "description": "low",
            "type": "array",
            "items": {
                "type": "number"
            }
        },
        "c": {
            "description": "last",
            "type": "array",
            "items": {
                "type": "number"
            }
        },
        "v": {
            "description": "value",
            "type": "array",
            "items": {
                "type": "number"
            }
        },
        "s": {
            "description": "status",
            "type": "string"
        },
        "nextTime": {
            "description": "nextTime",
            "type": "number"
        }
    }
};
let tradingViewHistoryResponseAjv = null;
function tradingViewHistoryResponseValidator() {
    if (tradingViewHistoryResponseAjv == null) {
        tradingViewHistoryResponseAjv = new Ajv({ validateSchema: false }).compile(exports.tradingViewHistoryResponseSchema);
    }
    return tradingViewHistoryResponseAjv;
}
exports.tradingViewHistoryResponseValidator = tradingViewHistoryResponseValidator;
//# sourceMappingURL=tradingViewHistoryResponse.js.map