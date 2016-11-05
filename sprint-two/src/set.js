var Set = function() {
  // instantiate set object
  var set = Object.create(setPrototype);
  set._storage = undefined;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  //edge case
  if (!item) {
    return 'must pass in item';
  }
  //set item as key and value
  this[item] = item;
};

setPrototype.contains = function(item) {
  //key lookup and type coercion
  return !!this[item];
};

setPrototype.remove = function(item) {
  delete this[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
  add: constant O(1);
  contains: constant O(1);
  remove: constant O(1);
 */
