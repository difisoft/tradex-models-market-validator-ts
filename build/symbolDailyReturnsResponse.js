"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Ajv = require("ajv");
exports.symbolDailyReturnsResponseSchema = {
    "id": "http://tradex.techx.vn/market/symbolDailyReturnsResponse",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "description": "symbolDailyReturnsResponse schema",
    "type": "object",
    "properties": {
        "additionalProperties": {
            "type": "array",
            "items": {
                "type": "number"
            }
        }
    }
};
let symbolDailyReturnsResponseAjv = null;
function symbolDailyReturnsResponseValidator() {
    if (symbolDailyReturnsResponseAjv == null) {
        symbolDailyReturnsResponseAjv = new Ajv({ validateSchema: false }).compile(exports.symbolDailyReturnsResponseSchema);
    }
    return symbolDailyReturnsResponseAjv;
}
exports.symbolDailyReturnsResponseValidator = symbolDailyReturnsResponseValidator;
//# sourceMappingURL=symbolDailyReturnsResponse.js.map