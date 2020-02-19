
/*
* This file is automatic generated
*/
import * as Ajv from 'ajv';
export const symbolQuoteMinuteResponseSchema = {
  "id": "http://tradex.techx.vn/market/symbolQuoteMinuteResponse",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "symbolQuoteMinuteResponse schema",
  "type": "object",
  "properties": {
    "t": {
      "description": "time (yyyyMMddhhmmss)",
      "type": "string"
    },
    "o": {
      "description": "open price",
      "type": "number"
    },
    "h": {
      "description": "high price",
      "type": "number"
    },
    "l": {
      "description": "low price",
      "type": "number"
    },
    "c": {
      "description": "close price",
      "type": "number"
    },
    "pv": {
      "description": "period trading volume",
      "type": "number"
    }
  }
};
let symbolQuoteMinuteResponseAjv = null;
export function symbolQuoteMinuteResponseValidator() {
  if (symbolQuoteMinuteResponseAjv == null) {
    symbolQuoteMinuteResponseAjv = new Ajv({validateSchema: false}).compile(symbolQuoteMinuteResponseSchema);
  }
  return symbolQuoteMinuteResponseAjv;
}
      