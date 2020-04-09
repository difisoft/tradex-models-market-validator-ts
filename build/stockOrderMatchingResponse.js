"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Ajv = require("ajv");
exports.stockOrderMatchingResponseSchema = {
    "id": "http://tradex.techx.vn/market/stockOrderMatchingResponse",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "description": "stockOrderMatchingResponse schema",
    "type": "object",
    "properties": {
        "data": {
            "description": "array list result",
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "p": {
                        "description": "price",
                        "type": "number"
                    },
                    "mv": {
                        "description": "total matchingVolume",
                        "type": "number"
                    }
                }
            }
        }
    }
};
let stockOrderMatchingResponseAjv = null;
function stockOrderMatchingResponseValidator() {
    if (stockOrderMatchingResponseAjv == null) {
        stockOrderMatchingResponseAjv = new Ajv({ validateSchema: false }).compile(exports.stockOrderMatchingResponseSchema);
    }
    return stockOrderMatchingResponseAjv;
}
exports.stockOrderMatchingResponseValidator = stockOrderMatchingResponseValidator;
//# sourceMappingURL=stockOrderMatchingResponse.js.map