// TODO add vows.js
var vows = require('vows')
  , assert = require('assert')
  , Set = require('./set')
  , arr1 = [0, 1]
  , arr2 = [0, 0, 1, 1]
  , arr3 = [0,1,2,3]
  , arr4 = [0, 0, 1, 2, 2, 3, 3, 0, 1]
  , set1 = new Set(arr1)
  , set2 = new Set(arr2)
  , set3 = new Set(arr3)
  , set4 = new Set(arr4)


assert.deepEqual(new Set(answer).get(),  answer,  "test1")
assert.deepEqual(new Set(test).get(),    answer,  "test2")
assert.deepEqual(new Set(answer2).get(), answer2, "test3")
assert.deepEqual(new Set(test2).get(),   answer2, "test4")
assert.notDeepEqual(new Set(test).get(),    answer2, "test5")
assert.notDeepEqual(new Set(test2).get(),   answer,  "test6")
assert.notDeepEqual(new Set(answer).get(),  answer2, "test6")
