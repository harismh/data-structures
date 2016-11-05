

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var hash = getIndexBelowMaxForKey(k, this._limit);
  var storage = this._storage;
  if (Array.isArray(storage[hash])) {
    var tuple = storage[hash];

    if (tuple.length === 2 && tuple[0] === k) {
      tuple[1] = v;
    }

    for (var i = 0; i < tuple.length; i += 2) {
      if (tuple[i] === k) {
        tuple[i + 1] === v;
        return;
      } 
    }
    
    tuple.push(k, v);
  } else { 
    var tuple = [];
    tuple.push(k, v);
    storage[hash] = tuple;
  }
};

HashTable.prototype.retrieve = function(k) {
  var hash = getIndexBelowMaxForKey(k, this._limit);
  var storage = this._storage;
  if (Array.isArray(storage[hash])) {
    var tuple = storage[hash];
    
    if (tuple.length === 2) {
      return tuple[1];
    }
    
    for (var i = 0; i < tuple.length; i += 2) {
      if (tuple[i] === k) {
        return tuple[i + 1];
      }
    }
  } else {
    return undefined;
  }
};

HashTable.prototype.remove = function(k) {
  var hash = getIndexBelowMaxForKey(k, this._limit);
  var storage = this._storage;
  if (Array.isArray(storage[hash])) {
    var tuple = storage[hash];

    if (tuple.length === 2) {
      var result = tuple.splice(0, 2);
      return result[1];
    }

    for (var i = 0; i < tuple.length; i += 2) {
      if (tuple[i] === k) {
        var result = tuple.splice(i, 2);
        return result[1];
      }
    }
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


