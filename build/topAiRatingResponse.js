"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.topAiRatingResponseValidator = exports.topAiRatingResponseSchema = void 0;
const Ajv = require("ajv");
exports.topAiRatingResponseSchema = {
    "id": "http://tradex.techx.vn/market/topAiRatingResponse",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "description": "topAiRatingResponse schema",
    "type": "array",
    "items": {
        "type": "object",
        "properties": {
            "code": {
                "description": "code",
                "type": "string"
            },
            "date": {
                "description": "date",
                "type": "string"
            },
            "techScore": {
                "description": "techScore",
                "type": "number"
            },
            "valuationScore": {
                "description": "valuationScore",
                "type": "number"
            },
            "gsScore": {
                "description": "gsScore",
                "type": "number"
            },
            "overall": {
                "description": "overall",
                "type": "number"
            },
            "price": {
                "description": "price",
                "type": "number"
            },
            "change": {
                "description": "change",
                "type": "number"
            }
        }
    }
};
let topAiRatingResponseAjv = null;
function topAiRatingResponseValidator() {
    if (topAiRatingResponseAjv == null) {
        topAiRatingResponseAjv = new Ajv({ validateSchema: false }).compile(exports.topAiRatingResponseSchema);
    }
    return topAiRatingResponseAjv;
}
exports.topAiRatingResponseValidator = topAiRatingResponseValidator;
//# sourceMappingURL=topAiRatingResponse.js.map