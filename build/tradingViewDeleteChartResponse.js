"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tradingViewDeleteChartResponseValidator = exports.tradingViewDeleteChartResponseSchema = void 0;
const Ajv = require("ajv");
exports.tradingViewDeleteChartResponseSchema = {
    "id": "http://tradex.techx.vn/market/tradingViewDeleteChartResponse",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "description": "tradingViewDeleteChartResponse schema",
    "type": "object",
    "properties": {
        "status": {
            "description": "status",
            "type": "string"
        }
    }
};
let tradingViewDeleteChartResponseAjv = null;
function tradingViewDeleteChartResponseValidator() {
    if (tradingViewDeleteChartResponseAjv == null) {
        tradingViewDeleteChartResponseAjv = new Ajv({ validateSchema: false }).compile(exports.tradingViewDeleteChartResponseSchema);
    }
    return tradingViewDeleteChartResponseAjv;
}
exports.tradingViewDeleteChartResponseValidator = tradingViewDeleteChartResponseValidator;
//# sourceMappingURL=tradingViewDeleteChartResponse.js.map