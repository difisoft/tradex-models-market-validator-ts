"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Ajv = require("ajv");
exports.tradingViewSymbolSearchResponseSchema = {
    "id": "http://tradex.techx.vn/market/tradingViewSymbolSearchResponse",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "description": "tradingViewSymbolSearchResponse schema",
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
let tradingViewSymbolSearchResponseAjv = null;
function tradingViewSymbolSearchResponseValidator() {
    if (tradingViewSymbolSearchResponseAjv == null) {
        tradingViewSymbolSearchResponseAjv = new Ajv({ validateSchema: false }).compile(exports.tradingViewSymbolSearchResponseSchema);
    }
    return tradingViewSymbolSearchResponseAjv;
}
exports.tradingViewSymbolSearchResponseValidator = tradingViewSymbolSearchResponseValidator;
//# sourceMappingURL=tradingViewSymbolSearchResponse.js.map