"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Ajv = require("ajv");
exports.indexStockListResponseSchema = {
    "id": "http://tradex.techx.vn/market/indexStockListResponse",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "description": "indexStockListResponse schema",
    "type": "array",
    "items": {
        "type": "string"
    }
};
let indexStockListResponseAjv = null;
function indexStockListResponseValidator() {
    if (indexStockListResponseAjv == null) {
        indexStockListResponseAjv = new Ajv({ validateSchema: false }).compile(exports.indexStockListResponseSchema);
    }
    return indexStockListResponseAjv;
}
exports.indexStockListResponseValidator = indexStockListResponseValidator;
//# sourceMappingURL=indexStockListResponse.js.map