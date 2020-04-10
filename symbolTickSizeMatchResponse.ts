
/*
* This file is automatic generated
*/
import * as Ajv from 'ajv';
export const symbolTickSizeMatchResponseSchema = {
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
export function symbolTickSizeMatchResponseValidator() {
  if (symbolTickSizeMatchResponseAjv == null) {
    symbolTickSizeMatchResponseAjv = new Ajv({validateSchema: false}).compile(symbolTickSizeMatchResponseSchema);
  }
  return symbolTickSizeMatchResponseAjv;
}
      