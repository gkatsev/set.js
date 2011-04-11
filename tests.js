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


vows.describe('Set').addBatch({
  "A set" : {
      "Initialized with array [0,1,1]" : {
          topic: new Set([0,1,1])

        , "will be a Set": function(topic){
            assert.instanceOf(topic, Set)
        }

        , "is not empty": function(topic){
            assert.isFalse(topic.empty())
        }

        , "contains a 0": function(topic){
            assert.isTrue(topic.contains(0))
        }

        , "contains a 1": function(topic){
            assert.isTrue(topic.contains(1))
        }

        , "doesn't contain a 5": function(topic){
            assert.isFalse(topic.contains(5))
        }

        , "returns an array [0,1]": function(topic){
            assert.deepEqual(topic.get(), [0,1])
        }

        , "has a size of 2": function(topic){
            assert.equal(topic.size(), 2)
        }
      }

    , "Initialized with array [0,1,1,2,2,3,0,5]" : {
          topic: new Set([0,1,1,2,2,3,0,5])

        , "will not contain element 5 when removed": function(topic){
            topic.remove(5)
            assert.isFalse(topic.contains(5))
        }

        , "will contain element 10 when added": function(topic){
            topic.add(10)
            assert.isTrue(topic.contains(10))
        }
    }

    , "Initialized with [0,1,2]": {
          topic: new Set([0,1,2])

        , "will be empty when cleared": function(topic){
            topic.clear()
            assert.isTrue(topic.empty())
        }
    }

    , "Initialized with [0,1,2,3,4]": {
          topic: new Set([0,1,2,3,4])

        , "is a superset of": {
              "Set [0,1,2]":{
                  topic: function(topic){
                    return topic.subset(new Set([0,1,2]))
                  }

                , "is a subset": function(topic){
                    assert.isTrue(topic)
                }
            }
            
            , "Set [0,2,4]":{
                  topic: function(topic){
                    return topic.subset(new Set([0,2,4]))
                  }

                , "is a subset": function(topic){
                    assert.isTrue(topic)
                }
            }

            , "Set [1,5,10]":{
                  topic: function(topic){
                    return topic.subset(new Set([1,5,10]))
                  }

                , "is not a subset": function(topic){
                    assert.isFalse(topic)
                }
            }
        }

        , "When unioned with a Set of [5,6,7]": {
              topic: function(topic){
                return topic.union(new Set([5,6,7]))
            }

            , "will give me a set": function(topic){
                assert.instanceOf(topic, Set)
            }

            , "will get an array of [0,1,2,3,4,5,6,7]": function(topic){
                assert.deepEqual(topic.get(), [0,1,2,3,4,5,6,7])
            }
        }

        , "when intersecting with a Set of [2,3,4,5,6,7]": {
              topic: function(topic){
                return topic.intersect(new Set([2,3,4,5,6,7]))
              }

            , "will give me a set": function(topic){
                assert.instanceOf(topic, Set)
            }

            , "will get an array of [2,3,4,5,6,7]": function(topic){
                assert.deepEqual(topic.get(), [2,3,4])
            }
        }

        , "when taking the difference with a Set of [2,3,4,5,6,7]": {
              topic: function(topic){
                return topic.difference(new Set([2,3,4,5,6,7]))
              }

            , "will give me a set": function(topic){
                assert.instanceOf(topic, Set)
            }

            , "will get an array of [0,1,5,6,7]": function(topic){
                assert.deepEqual(topic.get(), [0,1,5,6,7])
            }
        }
    }
}
}).export(module)

//assert.deepEqual(new Set(answer).get(),  answer,  "test1")
//assert.deepEqual(new Set(test).get(),    answer,  "test2")
//assert.deepEqual(new Set(answer2).get(), answer2, "test3")
//assert.deepEqual(new Set(test2).get(),   answer2, "test4")
//assert.notDeepEqual(new Set(test).get(),    answer2, "test5")
//assert.notDeepEqual(new Set(test2).get(),   answer,  "test6")
//assert.notDeepEqual(new Set(answer).get(),  answer2, "test6")
