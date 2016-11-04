

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var hash = getIndexBelowMaxForKey(k, this._limit);
  var storage = this._storage.return();
  if (Array.isArray(storage[hash]) && !!storage[hash]) {
    var tuple = storage[hash];
    tuple.push(k, v);
  } else if (!!storage[hash]) {
    var oldVal = storage[hash];
    var newTuple = [];
    newTuple.push(k, v);
    storage[hash] = newTuple;
  } else {
    this._storage.set(hash, v);
  }
  console.log(storage);
};

HashTable.prototype.retrieve = function(k) {
  var hash = getIndexBelowMaxForKey(k, this._limit);
  var storage = this._storage.return();
  if (Array.isArray(storage[hash]) && !!storage[hash]) {
    var tuple = storage[hash];
    for (var i = 0; i < tuple.length; i += 2) {
      if (tuple[i] === k) {
        return tuple[i + 1];
      }
    }
  } else if (!!storage[hash]) {
    return this._storage.get(hash);
  } else {
    return undefined;
  }
};

HashTable.prototype.remove = function(k) {
  var hash = getIndexBelowMaxForKey(k, this._limit);
  var storage = this._storage.return();
  if (Array.isArray(storage[hash])) {
    var tuple = storage[hash];
    for (var i = 0; i < tuple.length; i += 2) {
      if (tuple[i] === k) {
        var result = tuple.splice(i, 2);
        return result[1];
      }
    }
  } else if (!!storage[hash]) {
    var result = storage.splice(hash, 1);
    return result[0];
  } else {
    return undefined;
  }
};

// HashTable.prototype.checkLimit = function(index) {
//   if (typeof index !== 'number') {
//     throw new Error('setter requires a numeric index for its first argument');
//   }
//   if (this._limit <= index) {
//     throw new Error('Error trying to access an over-the-limit index');
//   }
// };



/*
 * Complexity: What is the time complexity of the above functions?
 */


