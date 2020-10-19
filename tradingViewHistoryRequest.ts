
/*
* This file is automatic generated
*/
import * as Ajv from 'ajv';
export const tradingViewHistoryRequestSchema = {
  "id": "http://tradex.techx.vn/market/tradingViewHistoryRequest",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "tradingViewHistoryRequest schema",
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
                    "sessionId": {
                      "description": "only use for vcsc rest",
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
                    "sessionId": {
                      "description": "only use for vcsc rest",
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
      "required": [
        "symbol",
        "from",
        "to",
        "resolution"
      ],
      "properties": {
        "symbol": {
          "description": "symbol Code",
          "type": "string"
        },
        "from": {
          "description": "from time, in millisecond / 1000, like 1586933880, 10 number",
          "type": "number"
        },
        "to": {
          "description": "to time, in millisecond / 1000, like 1586933880, 10 number",
          "type": "number"
        },
        "resolution": {
          "description": "resolution, for minute: ['1','3','5','10','15','30','60'], for daily, 'D', '1D', '1W', 'W', '1M', 'M', '6M'",
          "type": "string",
          "enum": [
            "1",
            "3",
            "5",
            "10",
            "15",
            "30",
            "60",
            "D",
            "1D",
            "W",
            "1W",
            "M",
            "1M",
            "6M"
          ]
        },
        "fetchCount": {
          "description": "Fetch count, default 300 for chart",
          "type": [
            "null",
            "number"
          ],
          "exclusiveMinimum": 0,
          "maximum": 300
        },
        "lastTime": {
          "description": "datetime of last received record, in millisecond / 1000, like 1586933880, 10 number",
          "type": [
            "null",
            "number"
          ]
        }
      }
    }
  ]
};
let tradingViewHistoryRequestAjv = null;
export function tradingViewHistoryRequestValidator() {
  if (tradingViewHistoryRequestAjv == null) {
    tradingViewHistoryRequestAjv = new Ajv({validateSchema: false}).compile(tradingViewHistoryRequestSchema);
  }
  return tradingViewHistoryRequestAjv;
}
      