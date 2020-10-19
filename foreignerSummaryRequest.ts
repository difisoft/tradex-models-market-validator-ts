
/*
* This file is automatic generated
*/
import * as Ajv from 'ajv';
export const foreignerSummaryRequestSchema = {
  "id": "http://tradex.techx.vn/market/foreignerSummaryRequest",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "foreignerSummaryRequest schema",
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
        "sortType": {
          "description": "sort Type",
          "oneOf": [
            {
              "type": "null"
            },
            {
              "type": "string",
              "enum": [
                "CODE",
                "NET_VALUE",
                "NET_VOLUME"
              ]
            }
          ]
        },
        "offset": {
          "description": "offset (default 0)",
          "type": [
            "integer",
            "null"
          ],
          "minimum": 0
        },
        "fetchCount": {
          "description": "The number of record that user want to see at each page (default 300)",
          "type": [
            "integer",
            "null"
          ],
          "maximum": 300,
          "minimum": 1
        }
      }
    }
  ]
};
let foreignerSummaryRequestAjv = null;
export function foreignerSummaryRequestValidator() {
  if (foreignerSummaryRequestAjv == null) {
    foreignerSummaryRequestAjv = new Ajv({validateSchema: false}).compile(foreignerSummaryRequestSchema);
  }
  return foreignerSummaryRequestAjv;
}
      