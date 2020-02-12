
/*
* This file is automatic generated
*/
import * as Ajv from 'ajv';
export const symbolForeignerDailyResponseSchema = {
  "id": "http://tradex.techx.vn/market/symbolForeignerDailyResponse",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "symbolForeignerDailyResponse schema",
  "type": "object",
  "properties": {
    "bv": {
      "description": "ForeignerBuyVolume",
      "type": "number"
    },
    "sv": {
      "description": "ForeignerSellVolume",
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
    }
  }
};
let symbolForeignerDailyResponseAjv = null;
export function symbolForeignerDailyResponseValidator() {
  if (symbolForeignerDailyResponseAjv == null) {
    symbolForeignerDailyResponseAjv = new Ajv({validateSchema: false}).compile(symbolForeignerDailyResponseSchema);
  }
  return symbolForeignerDailyResponseAjv;
}
      