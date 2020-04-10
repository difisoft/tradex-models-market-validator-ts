
/*
* This file is automatic generated
*/
import * as Ajv from 'ajv';
export const marketLiquidityResponseSchema = {
  "id": "http://tradex.techx.vn/market/marketLiquidityResponse",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "marketLiquidityResponse schema",
  "type": "object",
  "additionalProperties": {
    "type": "array",
    "description": "properties name is date (YYYYMMDD), each item is an array contain 2 value, minute (string) and liquidity (number)",
    "items": [
      {
        "type": "string",
        "description": "minute (hhmm)"
      },
      {
        "type": "number",
        "description": "liquidity"
      }
    ]
  }
};
let marketLiquidityResponseAjv = null;
export function marketLiquidityResponseValidator() {
  if (marketLiquidityResponseAjv == null) {
    marketLiquidityResponseAjv = new Ajv({validateSchema: false}).compile(marketLiquidityResponseSchema);
  }
  return marketLiquidityResponseAjv;
}
      