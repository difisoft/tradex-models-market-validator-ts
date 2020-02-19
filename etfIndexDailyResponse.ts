
/*
* This file is automatic generated
*/
import * as Ajv from 'ajv';
export const etfIndexDailyResponseSchema = {
  "id": "http://tradex.techx.vn/market/etfIndexDailyResponse",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "etfIndexDailyResponse schema",
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
let etfIndexDailyResponseAjv = null;
export function etfIndexDailyResponseValidator() {
  if (etfIndexDailyResponseAjv == null) {
    etfIndexDailyResponseAjv = new Ajv({validateSchema: false}).compile(etfIndexDailyResponseSchema);
  }
  return etfIndexDailyResponseAjv;
}
      