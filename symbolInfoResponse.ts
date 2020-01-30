
/*
* This file is automatic generated
*/
import * as Ajv from 'ajv';
export const symbolInfoResponseSchema = {
  "id": "http://tradex.techx.vn/market/symbolInfoResponse",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "symbolInfoResponse schema",
  "type": "object",
  "properties": {
    "s": {
      "description": "symbol code",
      "type": "string"
    },
    "n": {
      "description": "name",
      "type": "string"
    },
    "ne": {
      "description": "English name",
      "type": "string"
    },
    "t": {
      "description": "type",
      "type": "string"
    },
    "mt": {
      "description": "market Type",
      "type": "string"
    },
    "c": {
      "description": "last",
      "type": "number"
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
    "ch": {
      "description": "change",
      "type": "number"
    },
    "r": {
      "description": "rate",
      "type": "number"
    },
    "tv": {
      "description": "Trading Volume",
      "type": "number"
    },
    "tr": {
      "description": "Trading Value",
      "type": "number"
    },
    "d": {
      "description": "Date",
      "type": "string"
    },
    "ti": {
      "description": "time (yyyyMMddhhmmss)",
      "type": "string"
    },
    "ptv": {
      "description": "priority Trading Volume",
      "type": "number"
    },
    "rc": {
      "description": "reference code",
      "type": "string"
    },
    "cp": {
      "description": "ceiling Price",
      "type": "number"
    },
    "fp": {
      "description": "floor Price",
      "type": "number"
    },
    "ce": {
      "description": "ceiling Floor Equal",
      "type": "string"
    },
    "rp": {
      "description": "reference Price",
      "type": "number"
    },
    "ap": {
      "description": "average Price",
      "type": "number"
    },
    "ht": {
      "description": "high Time (yyyyMMddhhmmss)",
      "type": "string"
    },
    "lt": {
      "description": "low Time (yyyyMMddhhmmss)",
      "type": "string"
    },
    "pv": {
      "description": "putthrough volume",
      "type": "number"
    },
    "ttva": {
      "description": "total Trading Value",
      "type": "number"
    },
    "tor": {
      "description": "turnover Rate",
      "type": "number"
    },
    "ttvo": {
      "description": "total Trading Volume",
      "type": "number"
    },
    "lq": {
      "description": "listed Quantity",
      "type": "number"
    },
    "po": {
      "description": "project Open",
      "type": "number"
    },
    "cc": {
      "description": "control Code",
      "type": "string"
    },
    "hpw": {
      "description": "high Price 52 Week",
      "type": "number"
    },
    "lpw": {
      "description": "low Price 52 Week",
      "type": "number"
    },
    "bp": {
      "description": "bid Price",
      "type": "number"
    },
    "op": {
      "description": "offer Price",
      "type": "number"
    },
    "tbv": {
      "description": "total Bid Volume",
      "type": "number"
    },
    "tov": {
      "description": "total Offer Volume",
      "type": "number"
    },
    "ctbv": {
      "description": "change Of Total Bid Volume",
      "type": "number"
    },
    "ctov": {
      "description": "change Of Total Offer Volume",
      "type": "number"
    },
    "dbo": {
      "description": "different Bid Offer",
      "type": "number"
    },
    "abv": {
      "description": "accumulate Bid Volume",
      "type": "number"
    },
    "abc": {
      "description": "accumulate Bid Count",
      "type": "number"
    },
    "aov": {
      "description": "accumulate Offer Volume",
      "type": "number"
    },
    "aoc": {
      "description": "accumulate Offer Count",
      "type": "number"
    },
    "i": {
      "description": "industry",
      "type": "string"
    },
    "mb": {
      "description": "match By",
      "type": "string"
    },
    "mv": {
      "description": "match Volume",
      "type": "number"
    },
    "uc": {
      "description": "up Count",
      "type": "number"
    },
    "cec": {
      "description": "ceiling Count",
      "type": "number"
    },
    "dc": {
      "description": "down Count",
      "type": "number"
    },
    "fc": {
      "description": "floor Count",
      "type": "number"
    },
    "ucc": {
      "description": "unchanged Count",
      "type": "number"
    },
    "ih": {
      "description": "is Highlight",
      "type": "number"
    },
    "tbc": {
      "description": "total Bid Count",
      "type": "number"
    },
    "toc": {
      "description": "total Offer Count",
      "type": "number"
    },
    "in": {
      "description": "issuer Name",
      "type": "string"
    },
    "ecp": {
      "description": "exercise Price",
      "type": "number"
    },
    "er": {
      "description": "exercise Ratio",
      "type": "string"
    },
    "be": {
      "description": "break Even",
      "type": "number"
    },
    "iv": {
      "description": "implied Volatility",
      "type": "number"
    },
    "pt": {
      "description": "parity",
      "type": "number"
    },
    "md": {
      "description": "maturity Date",
      "type": "number"
    },
    "tp": {
      "description": "theory price",
      "type": "number"
    },
    "dt": {
      "description": "delta",
      "type": "number"
    },
    "gr": {
      "description": "gearing ratio",
      "type": "number"
    },
    "cfp": {
      "description": "capital Fulcrum Point",
      "type": "number"
    },
    "uls": {
      "description": "underlying Symbol",
      "type": "string"
    },
    "ulp": {
      "description": "underlying Price",
      "type": "number"
    },
    "ulc": {
      "description": "underlying Change",
      "type": "number"
    },
    "ulr": {
      "description": "underlying Rate",
      "type": "number"
    },
    "pva": {
      "description": "putthrough Value",
      "type": "number"
    },
    "ltt": {
      "description": "last Trading Time (yyyyMMdd hhmmss)",
      "type": "string"
    },
    "bvo": {
      "description": "bid Volume",
      "type": "number"
    },
    "ov": {
      "description": "offer Volume",
      "type": "number"
    },
    "ep": {
      "description": "expected Price",
      "type": "number"
    },
    "ses": {
      "description": "session",
      "type": "string"
    },
    "pvo": {
      "description": "priority Volume",
      "type": "number"
    },
    "ptva": {
      "description": "putthrough Trading Value",
      "type": "number"
    },
    "parv": {
      "description": "par Value",
      "type": "number"
    },
    "fbv": {
      "description": "foreigner Buy Volume",
      "type": "number"
    },
    "fsv": {
      "description": "foreigner Sell Volume",
      "type": "number"
    },
    "ftr": {
      "description": "foreigner Total Room",
      "type": "number"
    },
    "fcr": {
      "description": "foreigner Current Room",
      "type": "number"
    },
    "mn": {
      "description": "market Name",
      "type": "string"
    },
    "rg": {
      "description": "rights",
      "type": "string"
    },
    "bc": {
      "description": "base Code",
      "type": "string"
    },
    "bcst": {
      "description": "base Code Securities Type",
      "type": "string"
    },
    "oi": {
      "description": "open Interest",
      "type": "number"
    },
    "oic": {
      "description": "open Interest Change",
      "type": "number"
    },
    "nfbvo": {
      "description": "normal Foreigner BuyVolume",
      "type": "number"
    },
    "nfbva": {
      "description": "normal Foreigner BuyValue",
      "type": "number"
    },
    "nfsvo": {
      "description": "normal Foreigner Sell Volume",
      "type": "number"
    },
    "nfsva": {
      "description": "normal Foreigner Sell Value",
      "type": "number"
    },
    "pftbvo": {
      "description": "putthrough Foreigner Total Buy Volume",
      "type": "number"
    },
    "pftbva": {
      "description": "putthrough Foreigner Total Buy Value",
      "type": "number"
    },
    "pftsvo": {
      "description": "putthrough Foreigner Total Sell Volume",
      "type": "number"
    },
    "pftsva": {
      "description": "putthrough Foreigner Total Sell Value",
      "type": "number"
    },
    "ftd": {
      "description": "first Trading Date (yyyyMMdd)",
      "type": "string"
    },
    "etd": {
      "description": "end Trading Date (yyyyMMdd)",
      "type": "string"
    },
    "rd": {
      "description": "remain Date (yyyyMMdd)",
      "type": "number"
    },
    "thp": {
      "description": "theory Price",
      "type": "number"
    },
    "bs": {
      "description": "basis",
      "type": "number"
    },
    "thb": {
      "description": "theory Basis",
      "type": "number"
    },
    "mbs": {
      "description": "market Basis",
      "type": "number"
    },
    "dp": {
      "description": "disparate",
      "type": "number"
    },
    "dpr": {
      "description": "disparate Rate",
      "type": "number"
    },
    "sd": {
      "description": "start Date (yyyyMMdd)",
      "type": "string"
    },
    "end": {
      "description": "end Date (yyyyMMdd)",
      "type": "string"
    }
  }
};
let symbolInfoResponseAjv = null;
export function symbolInfoResponseValidator() {
  if (symbolInfoResponseAjv == null) {
    symbolInfoResponseAjv = new Ajv({validateSchema: false}).compile(symbolInfoResponseSchema);
  }
  return symbolInfoResponseAjv;
}
      