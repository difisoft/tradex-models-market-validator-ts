
/*
* This file is automatic generated
*/
import * as Ajv from 'ajv';
export const indexStockListResponseSchema = {
  "id": "http://tradex.techx.vn/market/indexStockListResponse",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "indexStockListResponse schema",
  "type": "array",
  "items": {
    "type": "string"
  }
};
let indexStockListResponseAjv = null;
export function indexStockListResponseValidator() {
  if (indexStockListResponseAjv == null) {
    indexStockListResponseAjv = new Ajv({validateSchema: false}).compile(indexStockListResponseSchema);
  }
  return indexStockListResponseAjv;
}
      