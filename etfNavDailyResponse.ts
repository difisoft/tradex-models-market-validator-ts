
/*
* This file is automatic generated
*/
import * as Ajv from 'ajv';
export const etfNavDailyResponseSchema = {
  "id": "http://tradex.techx.vn/market/etfNavDailyResponse",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "etfNavDailyResponse schema",
  "type": "object",
  "properties": {
    "cd": {
      "description": "code",
      "type": "string"
    },
    "d": {
      "description": "date",
      "type": "string"
    },
    "o": {
      "description": "open",
      "type": "number"
    },
    "h": {
      "description": "high",
      "type": "number"
    },
    "l": {
      "description": "low",
      "type": "number"
    },
    "c": {
      "description": "last",
      "type": "number"
    },
    "ch": {
      "description": "change",
      "type": "number"
    },
    "r": {
      "description": "rate",
      "type": "number"
    }
  }
};
let etfNavDailyResponseAjv = null;
export function etfNavDailyResponseValidator() {
  if (etfNavDailyResponseAjv == null) {
    etfNavDailyResponseAjv = new Ajv({validateSchema: false}).compile(etfNavDailyResponseSchema);
  }
  return etfNavDailyResponseAjv;
}
      