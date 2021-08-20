!(function (e, o) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = o(require('lodash.get')))
    : 'function' == typeof define && define.amd
    ? define(['lodash.get'], o)
    : ((e || self).testMicrobundle = o(e.get));
})(this, function (e) {
  function o(e) {
    return e && 'object' == typeof e && 'default' in e ? e : { default: e };
  }
  var t = o(e);
  return function () {
    console.log(t.default({ a: 1 }, 'a')), console.log('foo'), console.log('test');
  };
});
//# sourceMappingURL=foo.umd.js.map
