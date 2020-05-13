"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tradingViewSaveChartRequestValidator = exports.tradingViewSaveChartRequestSchema = void 0;
const Ajv = require("ajv");
exports.tradingViewSaveChartRequestSchema = {
    "id": "http://tradex.techx.vn/market/tradingViewSaveChartRequest",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "description": "tradingViewSaveChartRequest schema",
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
                "client",
                "user",
                "name",
                "symbol",
                "content",
                "resolution"
            ],
            "properties": {
                "client": {
                    "description": "client",
                    "type": "string"
                },
                "user": {
                    "description": "user",
                    "type": "string"
                },
                "name": {
                    "description": "name",
                    "type": "string"
                },
                "symbol": {
                    "description": "symbol",
                    "type": "string"
                },
                "content": {
                    "description": "content",
                    "type": "string"
                },
                "resolution": {
                    "description": "resolution",
                    "type": "string"
                }
            }
        }
    ]
};
let tradingViewSaveChartRequestAjv = null;
function tradingViewSaveChartRequestValidator() {
    if (tradingViewSaveChartRequestAjv == null) {
        tradingViewSaveChartRequestAjv = new Ajv({ validateSchema: false }).compile(exports.tradingViewSaveChartRequestSchema);
    }
    return tradingViewSaveChartRequestAjv;
}
exports.tradingViewSaveChartRequestValidator = tradingViewSaveChartRequestValidator;
//# sourceMappingURL=tradingViewSaveChartRequest.js.map