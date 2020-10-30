"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tradingViewSymbolInfoResponseValidator = exports.tradingViewSymbolInfoResponseSchema = void 0;
const Ajv = require("ajv");
exports.tradingViewSymbolInfoResponseSchema = {
    "id": "http://tradex.techx.vn/market/tradingViewSymbolInfoResponse",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "description": "tradingViewSymbolInfoResponse schema",
    "type": "object",
    "properties": {
        "symbol": {
            "description": "symbol",
            "type": "string"
        },
        "full_name": {
            "description": "full_name",
            "type": "string"
        },
        "description": {
            "description": "description",
            "type": "string"
        },
        "exchange": {
            "description": "exchange",
            "type": "string"
        },
        "type": {
            "description": "type",
            "type": "string"
        }
    }
};
let tradingViewSymbolInfoResponseAjv = null;
function tradingViewSymbolInfoResponseValidator() {
    if (tradingViewSymbolInfoResponseAjv == null) {
        tradingViewSymbolInfoResponseAjv = new Ajv({ validateSchema: false }).compile(exports.tradingViewSymbolInfoResponseSchema);
    }
    return tradingViewSymbolInfoResponseAjv;
}
exports.tradingViewSymbolInfoResponseValidator = tradingViewSymbolInfoResponseValidator;
//# sourceMappingURL=tradingViewSymbolInfoResponse.js.map