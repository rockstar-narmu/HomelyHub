function _0x3022() {
  const _0xcad78 = [
    "154594qLXrVx",
    "./routes/propertyRoutes",
    "/api/v1/rent/listing",
    "85220ckwAKW",
    "12rStdqt",
    "./routes/userRoutes",
    "158814OWinkQ",
    "256BfeXVL",
    "25722qyoPpU",
    "3JacFwy",
    "530CJcbBQ",
    "151544jiROqY",
    "23660YdWlKL",
    "use",
    "express",
    "130310qtRhEV",
    "json",
  ];
  _0x3022 = function () {
    return _0xcad78;
  };
  return _0x3022();
}
function _0x1113(_0x5048a5, _0x505812) {
  const _0x3022ec = _0x3022();
  return (
    (_0x1113 = function (_0x1113f7, _0x499045) {
      _0x1113f7 = _0x1113f7 - 0xc8;
      let _0x4f2ad0 = _0x3022ec[_0x1113f7];
      return _0x4f2ad0;
    }),
    _0x1113(_0x5048a5, _0x505812)
  );
}
const _0x401e3c = _0x1113;
(function (_0x17b722, _0x4a13ac) {
  const _0x406628 = _0x1113,
    _0x37e060 = _0x17b722();
  while (!![]) {
    try {
      const _0x3e5a02 =
        -parseInt(_0x406628(0xd3)) / 0x1 +
        parseInt(_0x406628(0xd8)) / 0x2 +
        (parseInt(_0x406628(0xd6)) / 0x3) * (-parseInt(_0x406628(0xd0)) / 0x4) +
        (-parseInt(_0x406628(0xcb)) / 0x5) * (parseInt(_0x406628(0xd1)) / 0x6) +
        (parseInt(_0x406628(0xc8)) / 0x7) * (parseInt(_0x406628(0xd4)) / 0x8) +
        (-parseInt(_0x406628(0xd5)) / 0x9) *
          (-parseInt(_0x406628(0xd7)) / 0xa) +
        parseInt(_0x406628(0xcd)) / 0xb;
      if (_0x3e5a02 === _0x4a13ac) break;
      else _0x37e060["push"](_0x37e060["shift"]());
    } catch (_0x1377cb) {
      _0x37e060["push"](_0x37e060["shift"]());
    }
  }
})(_0x3022, 0x1c9e1);
const express = require(_0x401e3c(0xca)),
  propertyRoutes = require(_0x401e3c(0xce)),
  userRoutes = require(_0x401e3c(0xd2)),
  cookieParser = require("cookie-parser"),
  app = express();
app[_0x401e3c(0xc9)](express[_0x401e3c(0xcc)]()),
  app[_0x401e3c(0xc9)](cookieParser()),
  app["use"](_0x401e3c(0xcf), propertyRoutes),
  app[_0x401e3c(0xc9)]("/api/v1/rent/user", userRoutes),
  (module["exports"] = app);
