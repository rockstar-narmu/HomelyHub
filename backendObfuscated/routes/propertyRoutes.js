function _0x1cbd(_0x4481a7, _0x2b08fb) {
  const _0x29837b = _0x2983();
  return (
    (_0x1cbd = function (_0x1cbd5b, _0x417c09) {
      _0x1cbd5b = _0x1cbd5b - 0x127;
      let _0x3eed39 = _0x29837b[_0x1cbd5b];
      return _0x3eed39;
    }),
    _0x1cbd(_0x4481a7, _0x2b08fb)
  );
}
const _0x2069b8 = _0x1cbd;
function _0x2983() {
  const _0x2e6326 = [
    "route",
    "4033010WpqPtk",
    "1127483iJcadw",
    "4076576jTarvq",
    "326174fhZkvw",
    "6074334skvUcc",
    "../controllers/authController",
    "getProperty",
    "116iWcCry",
    "getProperties",
    "get",
    "4BbyKlq",
    "../controllers/propertyController",
    "Router",
    "2543664aZbCOC",
    "27771JHCZkH",
    "/:id",
    "exports",
  ];
  _0x2983 = function () {
    return _0x2e6326;
  };
  return _0x2983();
}
(function (_0x467d6d, _0x2b54ac) {
  const _0x6ced36 = _0x1cbd,
    _0x593315 = _0x467d6d();
  while (!![]) {
    try {
      const _0x2feb1e =
        parseInt(_0x6ced36(0x12b)) / 0x1 +
        (parseInt(_0x6ced36(0x12f)) / 0x2) *
          (parseInt(_0x6ced36(0x136)) / 0x3) +
        (-parseInt(_0x6ced36(0x132)) / 0x4) *
          (parseInt(_0x6ced36(0x128)) / 0x5) +
        parseInt(_0x6ced36(0x135)) / 0x6 +
        parseInt(_0x6ced36(0x129)) / 0x7 +
        parseInt(_0x6ced36(0x12a)) / 0x8 +
        -parseInt(_0x6ced36(0x12c)) / 0x9;
      if (_0x2feb1e === _0x2b54ac) break;
      else _0x593315["push"](_0x593315["shift"]());
    } catch (_0x4334e5) {
      _0x593315["push"](_0x593315["shift"]());
    }
  }
})(_0x2983, 0x743e9);
const express = require("express"),
  propertyController = require(_0x2069b8(0x133)),
  authController = require(_0x2069b8(0x12d)),
  router = express[_0x2069b8(0x134)]();
router[_0x2069b8(0x127)]("/")[_0x2069b8(0x131)](
  propertyController[_0x2069b8(0x130)]
),
  router[_0x2069b8(0x127)](_0x2069b8(0x137))[_0x2069b8(0x131)](
    propertyController[_0x2069b8(0x12e)]
  ),
  (module[_0x2069b8(0x138)] = router);
