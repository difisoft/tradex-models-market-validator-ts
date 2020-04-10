"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Ajv = require("ajv");
exports.symbolTickSizeMatchResponseSchema = {
    "id": "http://tradex.techx.vn/market/symbolTickSizeMatchResponse",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "description": "symbolTickSizeMatchResponse schema",
    "type": "object",
    "properties": {
        "data": {
            "description": "array list result",
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "p": {
                        "description": "price",
                        "type": "number"
                    },
                    "mv": {
                        "description": "total matchingVolume",
                        "type": "number"
                    }
                }
            }
        }
    }
};
let symbolTickSizeMatchResponseAjv = null;
function symbolTickSizeMatchResponseValidator() {
    if (symbolTickSizeMatchResponseAjv == null) {
        symbolTickSizeMatchResponseAjv = new Ajv({ validateSchema: false }).compile(exports.symbolTickSizeMatchResponseSchema);
    }
    return symbolTickSizeMatchResponseAjv;
}
exports.symbolTickSizeMatchResponseValidator = symbolTickSizeMatchResponseValidator;
//# sourceMappingURL=symbolTickSizeMatchResponse.js.map