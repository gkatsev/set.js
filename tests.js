// TODO add vows.js
var assert = require('assert')
  , Set = require('./set')
  , answer = [0, 1]
  , test = [0, 0, 1, 1]
  , answer2 = [0,1,2,3]
  , test2 = [0, 0, 1, 2, 2, 3, 3, 0, 1]


assert.deepEqual(new Set(answer).get(),  answer,  "test1")
assert.deepEqual(new Set(test).get(),    answer,  "test2")
assert.deepEqual(new Set(answer2).get(), answer2, "test3")
assert.deepEqual(new Set(test2).get(),   answer2, "test4")
assert.notDeepEqual(new Set(test).get(),    answer2, "test5")
assert.notDeepEqual(new Set(test2).get(),   answer,  "test6")
assert.notDeepEqual(new Set(answer).get(),  answer2, "test6")
