

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  //create hash
  var hash = getIndexBelowMaxForKey(k, this._limit);
  //create temp variable for storage
  var storage = this._storage;
  //check if hash at storage already has tuple
  if (Array.isArray(storage[hash])) {
    var tuple = storage[hash];
    //check quickly if key already exists
    if (tuple.length === 2 && tuple[0] === k) {
      tuple[1] = v;
      return;
    }
    //check all of tuple for key that already exists
    for (var i = 0; i < tuple.length; i += 2) {
      if (tuple[i] === k) {
        tuple[i + 1] === v;
        return;
      } 
    }
    //push new key and value into tuple
    tuple.push(k, v);
  //else create tuple at empty hash
  } else { 
    var tuple = [];
    tuple.push(k, v);
    storage[hash] = tuple;
  }
};

HashTable.prototype.retrieve = function(k) {
  //create hash
  var hash = getIndexBelowMaxForKey(k, this._limit);
  //create temp variable for storage
  var storage = this._storage;
  //check to see if hash exists
  if (Array.isArray(storage[hash])) {
    //create temp variable for tuple
    var tuple = storage[hash];
    // one pair inside tuple, return val;
    if (tuple.length === 2) {
      return tuple[1];
    }
    // else loop through tuple, find key, return val;
    for (var i = 0; i < tuple.length; i += 2) {
      if (tuple[i] === k) {
        return tuple[i + 1];
      }
    }
    // if not found, return undefined
  } else {
    return undefined;
  }
};

HashTable.prototype.remove = function(k) {
  //create hash
  var hash = getIndexBelowMaxForKey(k, this._limit);
  //temp var for storage
  var storage = this._storage;
  //check to see if hash exists
  if (Array.isArray(storage[hash])) {
    //temp var for tuple
    var tuple = storage[hash];
    //check if only one pair exists for time complexity
    if (tuple.length === 2) {
      var result = tuple.splice(0, 2);
      return result[1];
    }
    //else check entire tuple for key
    for (var i = 0; i < tuple.length; i += 2) {
      if (tuple[i] === k) {
        var result = tuple.splice(i, 2);
        return result[1];
      }
    }
  //else key does not exist in storage;
  } else {
    return undefined;
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 insert: O(1) constant, unless more than 1 key/value in tuple; then linear O(n)
 retrieve: O(1) constant, unless more than 1 key/value in tuple; then linear O(n)
 remove:  O(1) constant, unless more than 1 key/value in tuple; then linear O(n)
 */


