"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.symbolDailyReturnsResponseValidator = exports.symbolDailyReturnsResponseSchema = void 0;
const Ajv = require("ajv");
exports.symbolDailyReturnsResponseSchema = {
    "id": "http://tradex.techx.vn/market/symbolDailyReturnsResponse",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "description": "symbolDailyReturnsResponse schema",
    "type": "object",
    "additionalProperties": {
        "type": "array",
        "description": "properties name is symbol code",
        "items": {
            "type": "number",
            "description": "list of returns"
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