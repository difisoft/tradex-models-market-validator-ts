
/*
* This file is automatic generated
*/
import * as Ajv from 'ajv';
export const symbolLatestResponseSchema = {
  "id": "http://tradex.techx.vn/market/symbolLatestResponse",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "symbolLatestResponse schema",
  "type": "object",
  "properties": {
    "s": {
      "description": "symbol code",
      "type": "string"
    },
    "t": {
      "description": "type: INDEX/STOCK/FUTURES/CW",
      "type": "string",
      "enum": [
        "INDEX",
        "STOCK",
        "FUTURES",
        "CW"
      ]
    },
    "o": {
      "description": "open price",
      "type": "number"
    },
    "h": {
      "description": "high price",
      "type": "number"
    },
    "l": {
      "description": "low price",
      "type": "number"
    },
    "c": {
      "description": "close price",
      "type": "number"
    },
    "a": {
      "description": "average price",
      "type": "number"
    },
    "ep": {
      "description": "expected price",
      "type": "number"
    },
    "ch": {
      "description": "change",
      "type": "number"
    },
    "ra": {
      "description": "rate",
      "type": "number"
    },
    "vo": {
      "description": "trading volume",
      "type": "number"
    },
    "va": {
      "description": "trading value",
      "type": "number"
    },
    "mv": {
      "description": "match volume",
      "type": "number"
    },
    "mb": {
      "description": "match by (CEILING/FLOOR)",
      "type": "string",
      "enum": [
        "CEILING",
        "FLOOR",
        ""
      ]
    },
    "bb": {
      "description": "best bid",
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "p": {
            "description": "price",
            "type": "number"
          },
          "v": {
            "description": "volume",
            "type": "number"
          },
          "c": {
            "description": "volume change",
            "type": "number"
          }
        }
      }
    },
    "bo": {
      "description": "best offer",
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "p": {
            "description": "price",
            "type": "number"
          },
          "v": {
            "description": "volume",
            "type": "number"
          },
          "c": {
            "description": "volume change",
            "type": "number"
          }
        }
      }
    },
    "ss": {
      "description": "session",
      "type": "string"
    },
    "tb": {
      "description": "total Bid Volume",
      "type": "number"
    },
    "to": {
      "description": "total Offer Volume",
      "type": "number"
    },
    "ic": {
      "description": "index change",
      "type": "object",
      "properties": {
        "ce": {
          "description": "ceiling count",
          "type": "number"
        },
        "fl": {
          "description": "floor count",
          "type": "number"
        },
        "up": {
          "description": "up count",
          "type": "number"
        },
        "dw": {
          "description": "down count",
          "type": "number"
        },
        "uc": {
          "description": "unChange count",
          "type": "number"
        }
      }
    },
    "fr": {
      "description": "foreigner",
      "type": "object",
      "properties": {
        "bv": {
          "description": "buy volume",
          "type": "number"
        },
        "sv": {
          "description": "sell volume",
          "type": "number"
        },
        "tr": {
          "description": "total room",
          "type": "number"
        },
        "cr": {
          "description": "current room",
          "type": "number"
        }
      }
    }
  }
};
let symbolLatestResponseAjv = null;
export function symbolLatestResponseValidator() {
  if (symbolLatestResponseAjv == null) {
    symbolLatestResponseAjv = new Ajv({validateSchema: false}).compile(symbolLatestResponseSchema);
  }
  return symbolLatestResponseAjv;
}
      