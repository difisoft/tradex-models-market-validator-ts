
/*
* This file is automatic generated
*/
import * as Ajv from 'ajv';
export const stockRankingUpDownRequestSchema = {
  "id": "http://tradex.techx.vn/market/stockRankingUpDownRequest",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "stockRankingUpDownRequest schema",
  "type": "object",
  "allOf": [
    {
      "id": "http://tradex.techx.vn/common/baseRequest",
      "$schema": "http://json-schema.org/draft-07/schema#",
      "description": "base request for all other",
      "type": "object",
      "properties": {
        "headers": {
          "id": "http://tradex.techx.vn/common/requestHeader",
          "$schema": "http://json-schema.org/draft-07/schema#",
          "description": "header for each request",
          "type": "object",
          "properties": {
            "token": {
              "oneOf": [
                {
                  "type": "null"
                },
                {
                  "id": "http://tradex.techx.vn/common/token",
                  "$schema": "http://json-schema.org/draft-07/schema#",
                  "description": "A geographical coordinate",
                  "type": "object",
                  "properties": {
                    "domain": {
                      "type": [
                        "null",
                        "string"
                      ]
                    },
                    "userId": {
                      "type": [
                        "null",
                        "number"
                      ]
                    },
                    "serviceCode": {
                      "type": [
                        "null",
                        "string"
                      ]
                    },
                    "connectionId": {
                      "type": [
                        "null",
                        "string"
                      ]
                    },
                    "serviceId": {
                      "type": [
                        "null",
                        "string"
                      ]
                    },
                    "serviceName": {
                      "type": [
                        "null",
                        "string"
                      ]
                    },
                    "clientId": {
                      "type": [
                        "null",
                        "number"
                      ]
                    },
                    "serviceUserId": {
                      "type": [
                        "null",
                        "number"
                      ]
                    },
                    "loginMethod": {
                      "type": [
                        "null",
                        "number"
                      ]
                    },
                    "refreshTokenId": {
                      "type": "number"
                    },
                    "scopeGroupIds": {
                      "type": "array",
                      "items": {
                        "type": "number"
                      }
                    },
                    "serviceUsername": {
                      "type": [
                        "null",
                        "string"
                      ]
                    },
                    "userData": {
                      "id": "http://tradex.techx.vn/common/userData",
                      "$schema": "http://json-schema.org/draft-07/schema#",
                      "description": "An user data in token",
                      "type": "object",
                      "properties": {
                        "username": {
                          "type": "string"
                        },
                        "orderKeys": {
                          "type": [
                            "null",
                            "number"
                          ]
                        },
                        "identifierNumber": {
                          "type": "string"
                        },
                        "branchCode": {
                          "type": "string"
                        },
                        "mngDeptCode": {
                          "type": "string"
                        },
                        "deptCode": {
                          "type": "string"
                        },
                        "agencyNumber": {
                          "type": "string"
                        },
                        "accountNumbers": {
                          "type": "array",
                          "items": {
                            "type": "string"
                          }
                        },
                        "fssTokenId": {
                          "type": "string"
                        }
                      }
                    }
                  }
                }
              ]
            },
            "secToken": {
              "oneOf": [
                {
                  "type": "null"
                },
                {
                  "id": "http://tradex.techx.vn/common/token",
                  "$schema": "http://json-schema.org/draft-07/schema#",
                  "description": "A geographical coordinate",
                  "type": "object",
                  "properties": {
                    "domain": {
                      "type": [
                        "null",
                        "string"
                      ]
                    },
                    "userId": {
                      "type": [
                        "null",
                        "number"
                      ]
                    },
                    "serviceCode": {
                      "type": [
                        "null",
                        "string"
                      ]
                    },
                    "connectionId": {
                      "type": [
                        "null",
                        "string"
                      ]
                    },
                    "serviceId": {
                      "type": [
                        "null",
                        "string"
                      ]
                    },
                    "serviceName": {
                      "type": [
                        "null",
                        "string"
                      ]
                    },
                    "clientId": {
                      "type": [
                        "null",
                        "number"
                      ]
                    },
                    "serviceUserId": {
                      "type": [
                        "null",
                        "number"
                      ]
                    },
                    "loginMethod": {
                      "type": [
                        "null",
                        "number"
                      ]
                    },
                    "refreshTokenId": {
                      "type": "number"
                    },
                    "scopeGroupIds": {
                      "type": "array",
                      "items": {
                        "type": "number"
                      }
                    },
                    "serviceUsername": {
                      "type": [
                        "null",
                        "string"
                      ]
                    },
                    "userData": {
                      "id": "http://tradex.techx.vn/common/userData",
                      "$schema": "http://json-schema.org/draft-07/schema#",
                      "description": "An user data in token",
                      "type": "object",
                      "properties": {
                        "username": {
                          "type": "string"
                        },
                        "orderKeys": {
                          "type": [
                            "null",
                            "number"
                          ]
                        },
                        "identifierNumber": {
                          "type": "string"
                        },
                        "branchCode": {
                          "type": "string"
                        },
                        "mngDeptCode": {
                          "type": "string"
                        },
                        "deptCode": {
                          "type": "string"
                        },
                        "agencyNumber": {
                          "type": "string"
                        },
                        "accountNumbers": {
                          "type": "array",
                          "items": {
                            "type": "string"
                          }
                        },
                        "fssTokenId": {
                          "type": "string"
                        }
                      }
                    }
                  }
                }
              ]
            },
            "accept-language": {
              "type": [
                "null",
                "string"
              ]
            }
          }
        },
        "sourceIp": {
          "type": "string"
        },
        "deviceType": {
          "type": [
            "null",
            "string"
          ]
        }
      }
    },
    {
      "properties": {
        "marketType": {
          "description": "market: ALL, HNX, HOSE, UPCOM",
          "oneOf": [
            {
              "type": "null"
            },
            {
              "type": "string",
              "enum": [
                "ALL",
                "HNX",
                "HOSE",
                "UPCOM"
              ]
            }
          ]
        },
        "upDownType": {
          "description": "upDownType",
          "oneOf": [
            {
              "type": "null"
            },
            {
              "type": "string",
              "enum": [
                "UP",
                "DOWN"
              ]
            }
          ]
        },
        "fromDate": {
          "description": "fromDate (yyyyMMdd)",
          "type": [
            "string",
            "null"
          ],
          "pattern": "^[0-9]{8}$"
        },
        "toDate": {
          "description": "toDate (yyyyMMdd)",
          "type": [
            "string",
            "null"
          ],
          "pattern": "^[0-9]{8}$"
        },
        "offset": {
          "description": "offset",
          "type": [
            "number",
            "null"
          ]
        },
        "fetchCount": {
          "description": "The number of record that user want to see at each page",
          "type": [
            "integer",
            "null"
          ],
          "maximum": 100,
          "minimum": 1
        }
      }
    }
  ]
};
let stockRankingUpDownRequestAjv = null;
export function stockRankingUpDownRequestValidator() {
  if (stockRankingUpDownRequestAjv == null) {
    stockRankingUpDownRequestAjv = new Ajv({validateSchema: false}).compile(stockRankingUpDownRequestSchema);
  }
  return stockRankingUpDownRequestAjv;
}
      