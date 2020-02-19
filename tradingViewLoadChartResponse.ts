
/*
* This file is automatic generated
*/
import * as Ajv from 'ajv';
export const tradingViewLoadChartResponseSchema = {
  "id": "http://tradex.techx.vn/market/tradingViewLoadChartResponse",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "tradingViewLoadChartResponse schema",
  "type": "object",
  "properties": {
    "status": {
      "description": "status",
      "type": "string"
    },
    "data": {
      "description": "data",
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
        "content": {
          "description": "content",
          "type": "string"
        }
      }
    },
    "message": {
      "description": "message",
      "type": "string"
    }
  }
};
let tradingViewLoadChartResponseAjv = null;
export function tradingViewLoadChartResponseValidator() {
  if (tradingViewLoadChartResponseAjv == null) {
    tradingViewLoadChartResponseAjv = new Ajv({validateSchema: false}).compile(tradingViewLoadChartResponseSchema);
  }
  return tradingViewLoadChartResponseAjv;
}
      