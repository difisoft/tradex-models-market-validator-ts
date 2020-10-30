"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.foreignerSummaryResponseValidator = exports.foreignerSummaryResponseSchema = void 0;
const Ajv = require("ajv");
exports.foreignerSummaryResponseSchema = {
    "id": "http://tradex.techx.vn/market/foreignerSummaryResponse",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "description": "foreignerSummaryResponse schema",
    "type": "object",
    "properties": {
        "s": {
            "description": "stock code",
            "type": "string"
        },
        "m": {
            "description": "market type (HOSE/HNX/UPCOM)",
            "type": "string"
        },
        "ch": {
            "description": "change",
            "type": "number"
        },
        "ra": {
            "description": "rate",
            "type": "number"
        },
        "c": {
            "description": "close price",
            "type": "number"
        },
        "bvo": {
            "description": "Foreigner buy volume",
            "type": "number"
        },
        "svo": {
            "description": "Foreigner sell volume",
            "type": "number"
        },
        "nvo": {
            "description": "Foreigner net volume (ròng)",
            "type": "number"
        },
        "bva": {
            "description": "Foreigner buy value",
            "type": "number"
        },
        "sva": {
            "description": "Foreigner sell value",
            "type": "number"
        },
        "nva": {
            "description": "net value (ròng)",
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
let foreignerSummaryResponseAjv = null;
function foreignerSummaryResponseValidator() {
    if (foreignerSummaryResponseAjv == null) {
        foreignerSummaryResponseAjv = new Ajv({ validateSchema: false }).compile(exports.foreignerSummaryResponseSchema);
    }
    return foreignerSummaryResponseAjv;
}
exports.foreignerSummaryResponseValidator = foreignerSummaryResponseValidator;
//# sourceMappingURL=foreignerSummaryResponse.js.map