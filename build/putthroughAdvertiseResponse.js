"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putthroughAdvertiseResponseValidator = exports.putthroughAdvertiseResponseSchema = void 0;
const Ajv = require("ajv");
exports.putthroughAdvertiseResponseSchema = {
    "id": "http://tradex.techx.vn/market/putthroughAdvertiseResponse",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "description": "putthroughAdvertiseResponse schema",
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
        "s": {
            "description": "sec Id",
            "type": "string"
        },
        "ti": {
            "description": "trader Id",
            "type": "string"
        },
        "sb": {
            "description": "sell Buy Type",
            "type": "string"
        },
        "p": {
            "description": "price",
            "type": "number"
        },
        "q": {
            "description": "quantity",
            "type": "number"
        },
        "pv": {
            "description": "put through volume",
            "type": "number"
        },
        "pt": {
            "description": "put through value",
            "type": "number"
        },
        "ct": {
            "description": "contact",
            "type": "string"
        },
        "ic": {
            "description": "is Cancel",
            "type": "boolean"
        }
    }
};
let putthroughAdvertiseResponseAjv = null;
function putthroughAdvertiseResponseValidator() {
    if (putthroughAdvertiseResponseAjv == null) {
        putthroughAdvertiseResponseAjv = new Ajv({ validateSchema: false }).compile(exports.putthroughAdvertiseResponseSchema);
    }
    return putthroughAdvertiseResponseAjv;
}
exports.putthroughAdvertiseResponseValidator = putthroughAdvertiseResponseValidator;
//# sourceMappingURL=putthroughAdvertiseResponse.js.map