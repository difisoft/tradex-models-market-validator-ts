
/*
* This file is automatic generated
*/
import * as Ajv from 'ajv';
export const tradingViewSymbolInfoResponseSchema = {
  "id": "http://tradex.techx.vn/market/tradingViewSymbolInfoResponse",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "tradingViewSymbolInfoResponse schema",
  "type": "object",
  "properties": {
    "symbol": {
      "description": "symbol",
      "type": "string"
    },
    "full_name": {
      "description": "full_name",
      "type": "string"
    },
    "description": {
      "description": "description",
      "type": "string"
    },
    "exchange": {
      "description": "exchange",
      "type": "string"
    },
    "type": {
      "description": "type",
      "type": "string"
    }
  }
};
let tradingViewSymbolInfoResponseAjv = null;
export function tradingViewSymbolInfoResponseValidator() {
  if (tradingViewSymbolInfoResponseAjv == null) {
    tradingViewSymbolInfoResponseAjv = new Ajv({validateSchema: false}).compile(tradingViewSymbolInfoResponseSchema);
  }
  return tradingViewSymbolInfoResponseAjv;
}
      