
/*
* This file is automatic generated
*/
import * as Ajv from 'ajv';
export const stockOrderMatchingResponseSchema = {
  "id": "http://tradex.techx.vn/market/stockOrderMatchingResponse",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "stockOrderMatchingResponse schema",
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
let stockOrderMatchingResponseAjv = null;
export function stockOrderMatchingResponseValidator() {
  if (stockOrderMatchingResponseAjv == null) {
    stockOrderMatchingResponseAjv = new Ajv({validateSchema: false}).compile(stockOrderMatchingResponseSchema);
  }
  return stockOrderMatchingResponseAjv;
}
      