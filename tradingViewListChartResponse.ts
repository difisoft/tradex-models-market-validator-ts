
/*
* This file is automatic generated
*/
import * as Ajv from 'ajv';
export const tradingViewListChartResponseSchema = {
  "id": "http://tradex.techx.vn/market/tradingViewListChartResponse",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "tradingViewListChartResponse schema",
  "type": "object",
  "properties": {
    "status": {
      "description": "status",
      "type": "string"
    },
    "data": {
      "description": "data",
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "description": "id",
            "type": "string"
          },
          "timestamp": {
            "description": "timestamp",
            "type": "number"
          },
          "name": {
            "description": "name",
            "type": "string"
          },
          "resolution": {
            "description": "resolution",
            "type": "string"
          },
          "symbol": {
            "description": "symbol",
            "type": "string"
          }
        }
      }
    }
  }
};
let tradingViewListChartResponseAjv = null;
export function tradingViewListChartResponseValidator() {
  if (tradingViewListChartResponseAjv == null) {
    tradingViewListChartResponseAjv = new Ajv({validateSchema: false}).compile(tradingViewListChartResponseSchema);
  }
  return tradingViewListChartResponseAjv;
}
      