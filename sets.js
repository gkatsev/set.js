var Set = function(input){
  var set = {}
    , i = 0
    , l = input.length
    ;

  for(; i < l; i++) {
    set[input[i]] = null;
  }

  this.get = function(){
    return Object.keys(set);
  }
}

module.exports = Set;
