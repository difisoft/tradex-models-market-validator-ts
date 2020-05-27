"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.foreignerDailyRequestValidator = exports.foreignerDailyRequestSchema = void 0;
const Ajv = require("ajv");
exports.foreignerDailyRequestSchema = {
    "id": "http://tradex.techx.vn/market/foreignerDailyRequest",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "description": "foreignerDailyRequest schema",
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
                "symbol"
            ],
            "properties": {
                "symbol": {
                    "description": "symbol code",
                    "type": "string"
                },
                "fetchCount": {
                    "description": "The number of record that user want to see at each page",
                    "type": [
                        "integer",
                        "null"
                    ],
                    "maximum": 100,
                    "minimum": 1
                },
                "fromDate": {
                    "description": "from date (yyyymmdd) - default 19700101",
                    "type": [
                        "string",
                        "null"
                    ]
                },
                "toDate": {
                    "description": "to date (yyyymmdd) - default today",
                    "type": [
                        "string",
                        "null"
                    ]
                },
                "baseDate": {
                    "description": "base date foreigner next (yyyymmdd) && to query date < baseDate",
                    "type": [
                        "string",
                        "null"
                    ]
                }
            }
        }
    ]
};
let foreignerDailyRequestAjv = null;
function foreignerDailyRequestValidator() {
    if (foreignerDailyRequestAjv == null) {
        foreignerDailyRequestAjv = new Ajv({ validateSchema: false }).compile(exports.foreignerDailyRequestSchema);
    }
    return foreignerDailyRequestAjv;
}
exports.foreignerDailyRequestValidator = foreignerDailyRequestValidator;
//# sourceMappingURL=foreignerDailyRequest.js.map