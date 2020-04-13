
/*
* This file is automatic generated
*/
import * as Ajv from 'ajv';
export const symbolDailyReturnsInitRequestSchema = {
  "id": "http://tradex.techx.vn/market/symbolDailyReturnsInitRequest",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "symbolDailyReturnsInitRequest schema",
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
      "properties": {
        "symbolList": {
          "description": "symbol code list to init",
          "type": "array",
          "items": {
            "description": "symbol code",
            "type": "string"
          }
        },
        "floorDate": {
          "description": "init returns from start of floorDate to today, (YYYYMMDD)",
          "type": "string"
        }
      }
    }
  ]
};
let symbolDailyReturnsInitRequestAjv = null;
export function symbolDailyReturnsInitRequestValidator() {
  if (symbolDailyReturnsInitRequestAjv == null) {
    symbolDailyReturnsInitRequestAjv = new Ajv({validateSchema: false}).compile(symbolDailyReturnsInitRequestSchema);
  }
  return symbolDailyReturnsInitRequestAjv;
}
      