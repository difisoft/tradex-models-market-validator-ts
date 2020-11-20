
/*
* This file is automatic generated
*/
import * as Ajv from 'ajv';
export const lastTradingDateResponseSchema = {
  "id": "http://tradex.techx.vn/market/lastTradingDateResponse",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "lastTradingDateResponse schema",
  "type": "object",
  "properties": {
    "lastTradingDate": {
      "description": "last trading date (YYYYMMDD)",
      "type": "string"
    }
  }
};
let lastTradingDateResponseAjv = null;
export function lastTradingDateResponseValidator() {
  if (lastTradingDateResponseAjv == null) {
    lastTradingDateResponseAjv = new Ajv({validateSchema: false}).compile(lastTradingDateResponseSchema);
  }
  return lastTradingDateResponseAjv;
}
      