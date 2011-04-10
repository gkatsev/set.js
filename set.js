var Set = function(input){
  var set
    , value = null

  this.get = function(prop){
    return set[prop], prop || Object.keys(set)
  }

  this.add = function(item){
    set[item] = value
  }

  this.unique = function(input){
    var set = {}
      , i = 0
      , l = input.length

    for(; i < l; i++) {
      set[input[i]] = value
    }

    return set
  }

  set = this.unique(input) || {}
}

module.exports = Set;
