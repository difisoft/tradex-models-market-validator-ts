"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Ajv = require("ajv");
exports.putthroughDealResponseSchema = {
    "id": "http://tradex.techx.vn/market/putthroughDealResponse",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "description": "putthroughDealResponse schema",
    "type": "object",
    "properties": {
        "c": {
            "description": "code",
            "type": "string"
        },
        "t": {
            "description": "time (yyyyMMdd)",
            "type": "string"
        },
        "cn": {
            "description": "confirm Number",
            "type": "string"
        },
        "mp": {
            "description": "match Price",
            "type": "string"
        },
        "mv": {
            "description": "match Volume",
            "type": "string"
        },
        "pv": {
            "description": "put through volume",
            "type": "number"
        },
        "pt": {
            "description": "put through value",
            "type": "number"
        },
        "ic": {
            "description": "is Cancel",
            "type": "boolean"
        }
    }
};
let putthroughDealResponseAjv = null;
function putthroughDealResponseValidator() {
    if (putthroughDealResponseAjv == null) {
        putthroughDealResponseAjv = new Ajv({ validateSchema: false }).compile(exports.putthroughDealResponseSchema);
    }
    return putthroughDealResponseAjv;
}
exports.putthroughDealResponseValidator = putthroughDealResponseValidator;
//# sourceMappingURL=putthroughDealResponse.js.map