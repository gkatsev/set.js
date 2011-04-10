var Set = function(input){
  var set
    , value = null

  this.contains = function(prop){
    return !!set[prop]
  }

  this.empty = function(){
    return Object.keys(set).length == 0
  }

  this.size = function(){
    throw new Error('not implemented')
  }

  this.get = function(){
    return Object.keys(set)
  }
  
  this.create = function(){
    throw new Error('not implemented')
  }

  this.add = function(prop){
    set[prop] = value
  }

  this.remove = function(prop){
    throw new Error('not implemented')
  }

  this.union = function(iset){
    throw new Error('not implemented')
  }

  this.intersect = function(iset){
    throw new Error('not implemented')
  }

  this.difference = function(iset){
    throw new Error('not implemented')
  }

  this.subset = function(iset){
    throw new Error('not implemented')
  }

  this.pop = function(){
    throw new Error('not implemented')
  }

  this.find = function(pred){
    throw new Error('not implemented')
  }

  this.clear = function(){
    throw new Error('not implemented')
  }

  this.unique = function(iset){
    var set = {}
      , i = 0
      , l = input.length

    for(; i < l; i++) {
      set[iset[i]] = value
    }

    return set
  }

  set = this.unique(input) || {}
}

module.exports = Set;
