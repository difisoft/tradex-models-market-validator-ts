
/*
* This file is automatic generated
*/
import * as Ajv from 'ajv';
export const symbolDailyReturnsResponseSchema = {
  "id": "http://tradex.techx.vn/market/symbolDailyReturnsResponse",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "symbolDailyReturnsResponse schema",
  "type": "object",
  "properties": {
    "additionalProperties": {
      "type": "array",
      "items": {
        "type": "number"
      }
    }
  }
};
let symbolDailyReturnsResponseAjv = null;
export function symbolDailyReturnsResponseValidator() {
  if (symbolDailyReturnsResponseAjv == null) {
    symbolDailyReturnsResponseAjv = new Ajv({validateSchema: false}).compile(symbolDailyReturnsResponseSchema);
  }
  return symbolDailyReturnsResponseAjv;
}
      