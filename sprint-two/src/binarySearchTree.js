var BinarySearchTree = function(value) {
  // instantiate tree
  var instance = Object.create(BinarySearchTreeMethods);
  
  // set initial values
  instance.value = value;
  instance.left = null;
  instance.right = null;
  
  return instance;
};

var BinarySearchTreeMethods = {};

BinarySearchTreeMethods.insert = function(value) {
  //edge case
  if (!value) {
    return 'must pass in integer value';
  }
  //create node object
  var node = {value: value, left: null, right: null};
  
  var recurse = function(current) {
    //check to go left or right
    if (value > current.value) {
      //if end of tree
      if (current.right === null) {
        current.right = node;
      } else {
        //continue right
        current = current.right;
        recurse(current);      
      }
    } else {
      //if end of tree
      if (current.left === null) {
        current.left = node;
      } else {
        //continue left
        current = current.left;
        recurse(current);
      }
    }
  };
  //call recursive helper
  return recurse(this);
};

BinarySearchTreeMethods.contains = function(target) {
  //initially set result
  var result = false;

  var recurse = function(current) {
    //target found
    if (current.value === target) {
      result = true;
    //check right
    } else if (current.value < target && current.right !== null) {
      current = current.right;
      recurse(current);
    //check left
    } else if (current.left !== null) {
      current = current.left;
      recruse(current);
    }
  };
  
  recurse(this);
  return result;
};

BinarySearchTreeMethods.depthFirstLog = function(cb) {
  //initally set false
  var calledOnce = false;
  
  var recurse = function(current) {
    //check to call cb on current node
    if (!calledOnce) {
      calledOnce = true;
      cb(current.value);
    } 
    //continue left
    if (current.left !== null) {
      current = current.left;
      calledOnce = false;
      recurse(current);
    //continue right
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
 insert: logarithmic O(log n)
 contains: logarithmic O(log n)
 depthFirstLog: linear O(n)
 */
