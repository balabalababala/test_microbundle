function o(o) {
  return o && 'object' == typeof o && 'default' in o ? o : { default: o };
}
var e = o(require('lodash.get'));
module.exports = function () {
  console.log(e.default({ a: 1 }, 'a')), console.log('foo'), console.log('test');
};
//# sourceMappingURL=foo.js.map
