
/*
* This file is automatic generated
*/
import * as Ajv from 'ajv';
export const symbolPeriodResponseSchema = {
  "id": "http://tradex.techx.vn/market/symbolPeriodResponse",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "symbolPeriodResponse schema",
  "type": "object",
  "properties": {
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
    "ch": {
      "description": "change",
      "type": "number"
    },
    "ra": {
      "description": "rate",
      "type": "number"
    },
    "vo": {
      "description": "trading volume",
      "type": "number"
    },
    "va": {
      "description": "trading value",
      "type": "number"
    },
    "dc": {
      "description": "day count",
      "type": "number"
    },
    "d": {
      "description": "date (YYYYMMDD)",
      "type": "string"
    }
  }
};
let symbolPeriodResponseAjv = null;
export function symbolPeriodResponseValidator() {
  if (symbolPeriodResponseAjv == null) {
    symbolPeriodResponseAjv = new Ajv({validateSchema: false}).compile(symbolPeriodResponseSchema);
  }
  return symbolPeriodResponseAjv;
}
      