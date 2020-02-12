"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Ajv = require("ajv");
exports.marketSessionStatusResponseSchema = {
    "id": "http://tradex.techx.vn/market/marketSessionStatusResponse",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "description": "marketSessionStatusResponse schema",
    "type": "object",
    "properties": {
        "market": {
            "description": "market: ALL, HNX, HOSE, UPCOM",
            "type": "string",
            "enum": [
                "ALL",
                "HNX",
                "HOSE",
                "UPCOM"
            ]
        },
        "status": {
            "description": "status: ATO, LO, INTERMISSION, ATC, PLO, CLOSED, RUNOFF",
            "type": "string",
            "enum": [
                "ATO",
                "LO",
                "INTERMISSION",
                "ATC",
                "PLO",
                "CLOSED",
                "RUNOFF"
            ]
        },
        "time": {
            "description": "time , example: 074500 - (hhmmss)",
            "type": "string",
            "pattern": "^[0-9]{6}$"
        },
        "type": {
            "description": "type: EQUITY, DERIVATIVES",
            "type": "string",
            "enum": [
                "EQUITY",
                "DERIVATIVES"
            ]
        }
    }
};
let marketSessionStatusResponseAjv = null;
function marketSessionStatusResponseValidator() {
    if (marketSessionStatusResponseAjv == null) {
        marketSessionStatusResponseAjv = new Ajv({ validateSchema: false }).compile(exports.marketSessionStatusResponseSchema);
    }
    return marketSessionStatusResponseAjv;
}
exports.marketSessionStatusResponseValidator = marketSessionStatusResponseValidator;
//# sourceMappingURL=marketSessionStatusResponse.js.map