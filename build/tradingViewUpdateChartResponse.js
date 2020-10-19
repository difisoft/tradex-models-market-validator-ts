"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tradingViewUpdateChartResponseValidator = exports.tradingViewUpdateChartResponseSchema = void 0;
const Ajv = require("ajv");
exports.tradingViewUpdateChartResponseSchema = {
    "id": "http://tradex.techx.vn/market/tradingViewUpdateChartResponse",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "description": "tradingViewUpdateChartResponse schema",
    "type": "object",
    "properties": {
        "status": {
            "description": "status",
            "type": "string"
        }
    }
};
let tradingViewUpdateChartResponseAjv = null;
function tradingViewUpdateChartResponseValidator() {
    if (tradingViewUpdateChartResponseAjv == null) {
        tradingViewUpdateChartResponseAjv = new Ajv({ validateSchema: false }).compile(exports.tradingViewUpdateChartResponseSchema);
    }
    return tradingViewUpdateChartResponseAjv;
}
exports.tradingViewUpdateChartResponseValidator = tradingViewUpdateChartResponseValidator;
//# sourceMappingURL=tradingViewUpdateChartResponse.js.map