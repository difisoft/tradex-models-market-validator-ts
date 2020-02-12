
/*
* This file is automatic generated
*/
import * as Ajv from 'ajv';
export const tradingViewDeleteChartResponseSchema = {
  "id": "http://tradex.techx.vn/market/tradingViewDeleteChartResponse",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "tradingViewDeleteChartResponse schema",
  "type": "object",
  "properties": {
    "status": {
      "description": "status",
      "type": "string"
    }
  }
};
let tradingViewDeleteChartResponseAjv = null;
export function tradingViewDeleteChartResponseValidator() {
  if (tradingViewDeleteChartResponseAjv == null) {
    tradingViewDeleteChartResponseAjv = new Ajv({validateSchema: false}).compile(tradingViewDeleteChartResponseSchema);
  }
  return tradingViewDeleteChartResponseAjv;
}
      