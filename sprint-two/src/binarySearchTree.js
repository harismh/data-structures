var BinarySearchTree = function(value) {
  var instance = Object.create(BinarySearchTreeMethods);
  instance.tree = {};
  instance.tree.start = {value: value, left: null, right: null};
  
  return instance;
};

var BinarySearchTreeMethods = {};

BinarySearchTreeMethods.insert = function(value) {
  var node = {value: value, left: null, right: null};
  
  var recurse = function(pointer) {
    if (value > pointer.value) {
      if (pointer.right === null) {
        pointer.right = node;
      } else {
        pointer = pointer.right;
        recurse(pointer);      
      }
    } else {
      if (pointer.left === null) {
        pointer.left = node;
      } else {
        pointer = pointer.left;
        recurse(pointer);
      }
    }
  };

  return recurse(this.tree.start);
};

BinarySearchTreeMethods.contains = function(target) {

};

BinarySearchTreeMethods.depthFirstLog = function(cb) {

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
