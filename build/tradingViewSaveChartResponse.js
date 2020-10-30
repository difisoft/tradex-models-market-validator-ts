"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tradingViewSaveChartResponseValidator = exports.tradingViewSaveChartResponseSchema = void 0;
const Ajv = require("ajv");
exports.tradingViewSaveChartResponseSchema = {
    "id": "http://tradex.techx.vn/market/tradingViewSaveChartResponse",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "description": "tradingViewSaveChartResponse schema",
    "type": "object",
    "properties": {
        "status": {
            "description": "status",
            "type": "string"
        },
        "id": {
            "description": "id",
            "type": "string"
        }
    }
};
let tradingViewSaveChartResponseAjv = null;
function tradingViewSaveChartResponseValidator() {
    if (tradingViewSaveChartResponseAjv == null) {
        tradingViewSaveChartResponseAjv = new Ajv({ validateSchema: false }).compile(exports.tradingViewSaveChartResponseSchema);
    }
    return tradingViewSaveChartResponseAjv;
}
exports.tradingViewSaveChartResponseValidator = tradingViewSaveChartResponseValidator;
//# sourceMappingURL=tradingViewSaveChartResponse.js.map