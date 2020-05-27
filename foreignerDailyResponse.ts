
/*
* This file is automatic generated
*/
import * as Ajv from 'ajv';
export const foreignerDailyResponseSchema = {
  "id": "http://tradex.techx.vn/market/foreignerDailyResponse",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "foreignerDailyResponse schema",
  "type": "object",
  "properties": {
    "bvo": {
      "description": "Foreigner buy volume",
      "type": "number"
    },
    "svo": {
      "description": "Foreigner sell volume",
      "type": "number"
    },
    "nvo": {
      "description": "Foreigner net volume (ròng)",
      "type": "number"
    },
    "bva": {
      "description": "Foreigner buy value",
      "type": "number"
    },
    "sva": {
      "description": "Foreigner sell value",
      "type": "number"
    },
    "nva": {
      "description": "net value (ròng)",
      "type": "number"
    },
    "tr": {
      "description": "ForeignerTotalRoom",
      "type": "number"
    },
    "cr": {
      "description": "ForeignerCurrentRoom",
      "type": "number"
    },
    "br": {
      "description": "ForeignerBuyAbleRatio",
      "type": "number"
    },
    "cv": {
      "description": "ForeignerChangeVolume",
      "type": "number"
    },
    "hv": {
      "description": "ForeignerHoldVolume",
      "type": "number"
    },
    "hr": {
      "description": "ForeignerHoldRatio",
      "type": "number"
    },
    "d": {
      "description": "date (YYYYMMDD)",
      "type": "string"
    }
  }
};
let foreignerDailyResponseAjv = null;
export function foreignerDailyResponseValidator() {
  if (foreignerDailyResponseAjv == null) {
    foreignerDailyResponseAjv = new Ajv({validateSchema: false}).compile(foreignerDailyResponseSchema);
  }
  return foreignerDailyResponseAjv;
}
      