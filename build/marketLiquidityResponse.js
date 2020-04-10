"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Ajv = require("ajv");
exports.marketLiquidityResponseSchema = {
    "id": "http://tradex.techx.vn/market/marketLiquidityResponse",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "description": "marketLiquidityResponse schema",
    "type": "object",
    "additionalProperties": {
        "type": "array",
        "description": "properties name is date (YYYYMMDD), each item is an array contain 2 value, minute (string) and liquidity (number)",
        "items": [
            {
                "type": "string",
                "description": "minute (hhmm)"
            },
            {
                "type": "number",
                "description": "liquidity"
            }
        ]
    }
};
let marketLiquidityResponseAjv = null;
function marketLiquidityResponseValidator() {
    if (marketLiquidityResponseAjv == null) {
        marketLiquidityResponseAjv = new Ajv({ validateSchema: false }).compile(exports.marketLiquidityResponseSchema);
    }
    return marketLiquidityResponseAjv;
}
exports.marketLiquidityResponseValidator = marketLiquidityResponseValidator;
//# sourceMappingURL=marketLiquidityResponse.js.map