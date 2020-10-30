"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tradingViewLoadChartResponseValidator = exports.tradingViewLoadChartResponseSchema = void 0;
const Ajv = require("ajv");
exports.tradingViewLoadChartResponseSchema = {
    "id": "http://tradex.techx.vn/market/tradingViewLoadChartResponse",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "description": "tradingViewLoadChartResponse schema",
    "type": "object",
    "properties": {
        "status": {
            "description": "status",
            "type": "string"
        },
        "data": {
            "description": "data",
            "type": "object",
            "properties": {
                "id": {
                    "description": "id",
                    "type": "string"
                },
                "timestamp": {
                    "description": "timestamp",
                    "type": "number"
                },
                "name": {
                    "description": "name",
                    "type": "string"
                },
                "content": {
                    "description": "content",
                    "type": "string"
                }
            }
        },
        "message": {
            "description": "message",
            "type": "string"
        }
    }
};
let tradingViewLoadChartResponseAjv = null;
function tradingViewLoadChartResponseValidator() {
    if (tradingViewLoadChartResponseAjv == null) {
        tradingViewLoadChartResponseAjv = new Ajv({ validateSchema: false }).compile(exports.tradingViewLoadChartResponseSchema);
    }
    return tradingViewLoadChartResponseAjv;
}
exports.tradingViewLoadChartResponseValidator = tradingViewLoadChartResponseValidator;
//# sourceMappingURL=tradingViewLoadChartResponse.js.map