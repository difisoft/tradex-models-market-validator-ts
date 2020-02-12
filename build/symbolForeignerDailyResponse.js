"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Ajv = require("ajv");
exports.symbolForeignerDailyResponseSchema = {
    "id": "http://tradex.techx.vn/market/symbolForeignerDailyResponse",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "description": "symbolForeignerDailyResponse schema",
    "type": "object",
    "properties": {
        "bv": {
            "description": "ForeignerBuyVolume",
            "type": "number"
        },
        "sv": {
            "description": "ForeignerSellVolume",
            "type": "number"
        },
        "tr": {
            "description": "ForeignerTotalRoom",
            "type": "number"
        },
        "cr": {
            "description": "ForeignerCurrentRoom",
            "type": "number"
        },
        "br": {
            "description": "ForeignerBuyAbleRatio",
            "type": "number"
        },
        "cv": {
            "description": "ForeignerChangeVolume",
            "type": "number"
        },
        "hv": {
            "description": "ForeignerHoldVolume",
            "type": "number"
        },
        "hr": {
            "description": "ForeignerHoldRatio",
            "type": "number"
        }
    }
};
let symbolForeignerDailyResponseAjv = null;
function symbolForeignerDailyResponseValidator() {
    if (symbolForeignerDailyResponseAjv == null) {
        symbolForeignerDailyResponseAjv = new Ajv({ validateSchema: false }).compile(exports.symbolForeignerDailyResponseSchema);
    }
    return symbolForeignerDailyResponseAjv;
}
exports.symbolForeignerDailyResponseValidator = symbolForeignerDailyResponseValidator;
//# sourceMappingURL=symbolForeignerDailyResponse.js.map