"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.etfIndexDailyResponseValidator = exports.etfIndexDailyResponseSchema = void 0;
const Ajv = require("ajv");
exports.etfIndexDailyResponseSchema = {
    "id": "http://tradex.techx.vn/market/etfIndexDailyResponse",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "description": "etfIndexDailyResponse schema",
    "type": "object",
    "properties": {
        "cd": {
            "description": "code",
            "type": "string"
        },
        "d": {
            "description": "date",
            "type": "string"
        },
        "o": {
            "description": "open",
            "type": "number"
        },
        "h": {
            "description": "high",
            "type": "number"
        },
        "l": {
            "description": "low",
            "type": "number"
        },
        "c": {
            "description": "last",
            "type": "number"
        },
        "ch": {
            "description": "change",
            "type": "number"
        },
        "r": {
            "description": "rate",
            "type": "number"
        }
    }
};
let etfIndexDailyResponseAjv = null;
function etfIndexDailyResponseValidator() {
    if (etfIndexDailyResponseAjv == null) {
        etfIndexDailyResponseAjv = new Ajv({ validateSchema: false }).compile(exports.etfIndexDailyResponseSchema);
    }
    return etfIndexDailyResponseAjv;
}
exports.etfIndexDailyResponseValidator = etfIndexDailyResponseValidator;
//# sourceMappingURL=etfIndexDailyResponse.js.map