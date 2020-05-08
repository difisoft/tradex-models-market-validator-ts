
/*
* This file is automatic generated
*/
import * as Ajv from 'ajv';
export const topAiRatingResponseSchema = {
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
export function topAiRatingResponseValidator() {
  if (topAiRatingResponseAjv == null) {
    topAiRatingResponseAjv = new Ajv({validateSchema: false}).compile(topAiRatingResponseSchema);
  }
  return topAiRatingResponseAjv;
}
      