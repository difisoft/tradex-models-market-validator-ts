"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lastTradingDateResponseValidator = exports.lastTradingDateResponseSchema = void 0;
const Ajv = require("ajv");
exports.lastTradingDateResponseSchema = {
    "id": "http://tradex.techx.vn/market/lastTradingDateResponse",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "description": "lastTradingDateResponse schema",
    "type": "object",
    "properties": {
        "lastTradingDate": {
            "description": "last trading date (YYYYMMDD)",
            "type": "string"
        }
    }
};
let lastTradingDateResponseAjv = null;
function lastTradingDateResponseValidator() {
    if (lastTradingDateResponseAjv == null) {
        lastTradingDateResponseAjv = new Ajv({ validateSchema: false }).compile(exports.lastTradingDateResponseSchema);
    }
    return lastTradingDateResponseAjv;
}
exports.lastTradingDateResponseValidator = lastTradingDateResponseValidator;
//# sourceMappingURL=lastTradingDateResponse.js.map