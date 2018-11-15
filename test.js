var moment8 = require('./index')
var ISODate = require('novad-iso-date')
var assert = require('assert')







var input0 = '2017-04-30T16:12:34.000+0000'
var input1 = '2017-04-30T16:12:34.000+00:00'
var f0 = 'YYYY-MM-DD HH:mm:ss'
var f1 = 'YYYY-M-D HH:mm:ss'
var result0 = '2017-05-01 00:12:34'
var result1 = '2017-5-1 00:12:34'

assert.equal(moment8(input0, f0), result0)
assert.equal(moment8(input1, f0), result0)
assert.equal(moment8(input0, f1), result1)
assert.equal(moment8(input1, f1), result1)

assert.equal(moment8(ISODate(input0), f0), result0)
assert.equal(moment8(ISODate(input1), f1), result1)

console.log(ISODate(input0));

console.log(moment8(input0, f0));



