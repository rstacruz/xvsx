/* global describe, it */
describe('coding style', function () {
  this.timeout(10000)
  it('conforms to standard', require('mocha-standard').files([
    'src/**/*.js{,x}'
  ], { parser: 'babel-eslint' }))
})
