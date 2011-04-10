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
    return Object.keys(set).length
  }

  this.get = function(){
    return Object.keys(set)
  }
  
  this.create = function(){
    set = this.unique(Array.prototype.toString.call(arguments))
  }

  this.add = function(prop){
    set[prop] = value
  }

  this.remove = function(prop){
    delete set[prop]
  }

  this.union = function(iset){
    return new Set(this.get().concat(iset.get()))
  }


  this.intersect = function(iset){
    var items = iset.get()
      , i = 0
      , l = items.length
      , oset = new Set()
      , prop

    for(; i < l; i++){
      prop = items[i]
      if(!this.contains(prop)){
        oset.add(prop)
      }
    }

    items = this.get()

    for(; i < l; i++){
      prop = items[i]
      if(!iset.contains(prop)){
        oset.add(prop)
      }
    }

    return oset
  }

  this.difference = function(iset){
    var items = iset.get()
      , i = 0
      , l = items.length
      , oset = this.union(iset)
      , prop

    for(; i < l; i++){
      prop = items[i]
      if(this.contains(prop)){
        oset.remove(prop)
      }
    }

    return oset
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
