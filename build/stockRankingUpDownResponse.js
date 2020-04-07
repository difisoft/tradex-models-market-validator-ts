"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Ajv = require("ajv");
exports.stockRankingUpDownResponseSchema = {
    "id": "http://tradex.techx.vn/market/stockRankingUpDownResponse",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "description": "stockRankingUpDownResponse schema",
    "type": "object",
    "properties": {
        "HNX": {
            "description": "HNX",
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "mt": {
                        "description": "marketType",
                        "type": "string"
                    },
                    "cd": {
                        "description": "code",
                        "type": "string"
                    },
                    "cl": {
                        "description": "ceiling Floor Equal",
                        "type": "string"
                    },
                    "d": {
                        "description": "date (yyyyMMdd)",
                        "type": "string"
                    },
                    "o": {
                        "description": "open",
                        "type": "number"
                    },
                    "h": {
                        "description": "high",
                        "type": "number"
                    },
                    "l": {
                        "description": "low",
                        "type": "number"
                    },
                    "c": {
                        "description": "last",
                        "type": "number"
                    },
                    "ch": {
                        "description": "change",
                        "type": "number"
                    },
                    "r": {
                        "description": "rate",
                        "type": "number"
                    },
                    "tv": {
                        "description": "trading Volume",
                        "type": "number"
                    },
                    "tr": {
                        "description": "trading Value",
                        "type": "number"
                    },
                    "uc": {
                        "description": "up Down Change",
                        "type": "number"
                    },
                    "ur": {
                        "description": "up Down Rate",
                        "type": "number"
                    },
                    "sp": {
                        "description": "start Price",
                        "type": "number"
                    },
                    "ep": {
                        "description": "end Price",
                        "type": "number"
                    }
                }
            }
        },
        "HOSE": {
            "description": "HOSE",
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "mt": {
                        "description": "marketType",
                        "type": "string"
                    },
                    "cd": {
                        "description": "code",
                        "type": "string"
                    },
                    "cl": {
                        "description": "ceiling Floor Equal",
                        "type": "string"
                    },
                    "d": {
                        "description": "date",
                        "type": "string"
                    },
                    "o": {
                        "description": "open",
                        "type": "number"
                    },
                    "h": {
                        "description": "high",
                        "type": "number"
                    },
                    "l": {
                        "description": "low",
                        "type": "number"
                    },
                    "c": {
                        "description": "last",
                        "type": "number"
                    },
                    "ch": {
                        "description": "change",
                        "type": "number"
                    },
                    "r": {
                        "description": "rate",
                        "type": "number"
                    },
                    "tv": {
                        "description": "trading Volume",
                        "type": "number"
                    },
                    "tr": {
                        "description": "trading Value",
                        "type": "number"
                    },
                    "uc": {
                        "description": "up Down Change",
                        "type": "number"
                    },
                    "ur": {
                        "description": "up Down Rate",
                        "type": "number"
                    },
                    "sp": {
                        "description": "start Price",
                        "type": "number"
                    },
                    "ep": {
                        "description": "end Price",
                        "type": "number"
                    }
                }
            }
        },
        "UPCOM": {
            "description": "UPCOM",
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "mt": {
                        "description": "marketType",
                        "type": "string"
                    },
                    "cd": {
                        "description": "code",
                        "type": "string"
                    },
                    "cl": {
                        "description": "ceiling Floor Equal",
                        "type": "string"
                    },
                    "d": {
                        "description": "date",
                        "type": "string"
                    },
                    "o": {
                        "description": "open",
                        "type": "number"
                    },
                    "h": {
                        "description": "high",
                        "type": "number"
                    },
                    "l": {
                        "description": "low",
                        "type": "number"
                    },
                    "c": {
                        "description": "last",
                        "type": "number"
                    },
                    "ch": {
                        "description": "change",
                        "type": "number"
                    },
                    "r": {
                        "description": "rate",
                        "type": "number"
                    },
                    "tv": {
                        "description": "trading Volume",
                        "type": "number"
                    },
                    "tr": {
                        "description": "trading Value",
                        "type": "number"
                    },
                    "uc": {
                        "description": "up Down Change",
                        "type": "number"
                    },
                    "ur": {
                        "description": "up Down Rate",
                        "type": "number"
                    },
                    "sp": {
                        "description": "start Price",
                        "type": "number"
                    },
                    "ep": {
                        "description": "end Price",
                        "type": "number"
                    }
                }
            }
        }
    }
};
let stockRankingUpDownResponseAjv = null;
function stockRankingUpDownResponseValidator() {
    if (stockRankingUpDownResponseAjv == null) {
        stockRankingUpDownResponseAjv = new Ajv({ validateSchema: false }).compile(exports.stockRankingUpDownResponseSchema);
    }
    return stockRankingUpDownResponseAjv;
}
exports.stockRankingUpDownResponseValidator = stockRankingUpDownResponseValidator;
//# sourceMappingURL=stockRankingUpDownResponse.js.map