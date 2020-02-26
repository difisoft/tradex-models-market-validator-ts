"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Ajv = require("ajv");
exports.foreignerDailyResponseSchema = {
    "id": "http://tradex.techx.vn/market/foreignerDailyResponse",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "description": "foreignerDailyResponse schema",
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
let foreignerDailyResponseAjv = null;
function foreignerDailyResponseValidator() {
    if (foreignerDailyResponseAjv == null) {
        foreignerDailyResponseAjv = new Ajv({ validateSchema: false }).compile(exports.foreignerDailyResponseSchema);
    }
    return foreignerDailyResponseAjv;
}
exports.foreignerDailyResponseValidator = foreignerDailyResponseValidator;
//# sourceMappingURL=foreignerDailyResponse.js.map