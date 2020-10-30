
/*
* This file is automatic generated
*/
import * as Ajv from 'ajv';
export const tradingViewSaveChartResponseSchema = {
  "id": "http://tradex.techx.vn/market/tradingViewSaveChartResponse",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "tradingViewSaveChartResponse schema",
  "type": "object",
  "properties": {
    "status": {
      "description": "status",
      "type": "string"
    },
    "id": {
      "description": "id",
      "type": "string"
    }
  }
};
let tradingViewSaveChartResponseAjv = null;
export function tradingViewSaveChartResponseValidator() {
  if (tradingViewSaveChartResponseAjv == null) {
    tradingViewSaveChartResponseAjv = new Ajv({validateSchema: false}).compile(tradingViewSaveChartResponseSchema);
  }
  return tradingViewSaveChartResponseAjv;
}
      