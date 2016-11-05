var BinarySearchTree = function(value) {
  var instance = Object.create(BinarySearchTreeMethods);
  
  instance.value = value;
  instance.left = null;
  instance.right = null;
  
  return instance;
};

var BinarySearchTreeMethods = {};

BinarySearchTreeMethods.insert = function(value) {
  var node = {value: value, left: null, right: null};
  
  var recurse = function(current) {
    if (value > current.value) {
      if (current.right === null) {
        current.right = node;
      } else {
        current = current.right;
        recurse(current);      
      }
    } else {
      if (current.left === null) {
        current.left = node;
      } else {
        current = current.left;
        recurse(current);
      }
    }
  };

  return recurse(this);
};

BinarySearchTreeMethods.contains = function(target) {
  var result = false;

  var recurse = function(current) {
    if (current.value === target) {
      result = true;
    } else if (current.value < target && current.right !== null) {
      current = current.right;
      recurse(current);
    } else if (current.left !== null) {
      current = current.left;
      recruse(current);
    }
  };
  
  recurse(this);
  return result;
};

BinarySearchTreeMethods.depthFirstLog = function(cb) {
  var calledOnce = false;
  
  var recurse = function(current) {
    if (!calledOnce) {
      calledOnce = true;
      cb(current.value);
    } 
    if (current.left !== null) {
      current = current.left;
      calledOnce = false;
      recurse(current);
    } else if (current.right !== null) {
      current = current.right;
      calledOnce = false;
      recurse(current);
    }
  };

  recurse(this);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
