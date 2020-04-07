
/*
* This file is automatic generated
*/
import * as Ajv from 'ajv';
export const stockRankingTopResponseSchema = {
  "id": "http://tradex.techx.vn/market/stockRankingTopResponse",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "stockRankingTopResponse schema",
  "type": "object",
  "properties": {
    "mt": {
      "description": "marketType",
      "type": "string"
    },
    "cd": {
      "description": "code",
      "type": "string"
    },
    "cl": {
      "description": "ceiling Floor Equal",
      "type": "string"
    },
    "d": {
      "description": "date (yyyyMMdd)",
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
    },
    "tv": {
      "description": "trading Volume",
      "type": "number"
    },
    "tr": {
      "description": "trading Value",
      "type": "number"
    },
    "pi": {
      "description": "power indicator",
      "type": "number"
    }
  }
};
let stockRankingTopResponseAjv = null;
export function stockRankingTopResponseValidator() {
  if (stockRankingTopResponseAjv == null) {
    stockRankingTopResponseAjv = new Ajv({validateSchema: false}).compile(stockRankingTopResponseSchema);
  }
  return stockRankingTopResponseAjv;
}
      