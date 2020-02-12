
/*
* This file is automatic generated
*/
import * as Ajv from 'ajv';
export const fixSecurityListQueryResponseSchema = {
  "id": "http://tradex.techx.vn/market/fixSecurityListQueryResponse",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "fixSecurityListQueryResponse schema",
  "type": "object",
  "properties": {
    "ic": {
      "description": "instrumentCode",
      "type": "string"
    },
    "cc": {
      "description": "cfiCode",
      "type": "string"
    },
    "c": {
      "description": "currency",
      "type": "string"
    },
    "se": {
      "description": "securityExchange",
      "type": "string"
    },
    "sd": {
      "description": "securityDescription",
      "type": "string"
    },
    "rl": {
      "description": "roundLot",
      "type": "number"
    },
    "mtv": {
      "description": "minTradeVolume",
      "type": "number"
    },
    "cm": {
      "description": "contractMultiplier",
      "type": "number"
    },
    "mmy": {
      "description": "maturityMonthYear",
      "type": "string"
    },
    "md": {
      "description": "maturityDate",
      "type": "string"
    },
    "st": {
      "description": "securityType",
      "type": "string"
    },
    "us": {
      "description": "underlyingSymbol",
      "type": "string"
    },
    "cp": {
      "description": "ceilingPrice",
      "type": "number"
    },
    "fp": {
      "description": "floorPrice",
      "type": "number"
    },
    "ep": {
      "description": "exercisePrice",
      "type": "number"
    },
    "er": {
      "description": "exerciseRatio",
      "type": "string"
    },
    "bc": {
      "description": "baseCodeSecuritiesType",
      "type": "string"
    }
  }
};
let fixSecurityListQueryResponseAjv = null;
export function fixSecurityListQueryResponseValidator() {
  if (fixSecurityListQueryResponseAjv == null) {
    fixSecurityListQueryResponseAjv = new Ajv({validateSchema: false}).compile(fixSecurityListQueryResponseSchema);
  }
  return fixSecurityListQueryResponseAjv;
}
      