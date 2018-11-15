var assert = require('assert')
var ISODate = require('../index')
describe('test', function () {
    it('2017-04-30T16:00:00.000+0000', function () {
        assert.equal(ISODate('2017-04-30T16:00:00.000+0000').getFullYear(), '2017')
    })
    it('2017-04-30T16:00:00.000+00:00', function () {
        assert.equal(ISODate('2017-04-30T16:00:00.000+00:00').getFullYear(), '2017')
    })
    it('other', function () {
        assert.notEqual(ISODate('other').getFullYear(), '2017')
    })
})