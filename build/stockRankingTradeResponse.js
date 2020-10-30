"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stockRankingTradeResponseValidator = exports.stockRankingTradeResponseSchema = void 0;
const Ajv = require("ajv");
exports.stockRankingTradeResponseSchema = {
    "id": "http://tradex.techx.vn/market/stockRankingTradeResponse",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "description": "stockRankingTradeResponse schema",
    "type": "object",
    "properties": {
        "c": {
            "description": "code",
            "type": "string"
        },
        "l": {
            "description": "last",
            "type": "number"
        },
        "cn": {
            "description": "change",
            "type": "number"
        },
        "r": {
            "description": "rate",
            "type": "number"
        },
        "tv": {
            "description": "trading Volume",
            "type": "number"
        },
        "tr": {
            "description": "trading Value",
            "type": "number"
        },
        "to": {
            "description": "turnover Rate",
            "type": "number"
        }
    }
};
let stockRankingTradeResponseAjv = null;
function stockRankingTradeResponseValidator() {
    if (stockRankingTradeResponseAjv == null) {
        stockRankingTradeResponseAjv = new Ajv({ validateSchema: false }).compile(exports.stockRankingTradeResponseSchema);
    }
    return stockRankingTradeResponseAjv;
}
exports.stockRankingTradeResponseValidator = stockRankingTradeResponseValidator;
//# sourceMappingURL=stockRankingTradeResponse.js.map