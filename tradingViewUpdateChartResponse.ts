
/*
* This file is automatic generated
*/
import * as Ajv from 'ajv';
export const tradingViewUpdateChartResponseSchema = {
  "id": "http://tradex.techx.vn/market/tradingViewUpdateChartResponse",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "tradingViewUpdateChartResponse schema",
  "type": "object",
  "properties": {
    "status": {
      "description": "status",
      "type": "string"
    }
  }
};
let tradingViewUpdateChartResponseAjv = null;
export function tradingViewUpdateChartResponseValidator() {
  if (tradingViewUpdateChartResponseAjv == null) {
    tradingViewUpdateChartResponseAjv = new Ajv({validateSchema: false}).compile(tradingViewUpdateChartResponseSchema);
  }
  return tradingViewUpdateChartResponseAjv;
}
      