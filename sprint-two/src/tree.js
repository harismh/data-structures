var Tree = function(value) {
  // create tree object
  var newTree = {};
  
  newTree.value = value;
  newTree.children = undefined;

  //add treeMethods
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // instantiate tree child with value
  var child = Tree(value);
  // if tree object has no children
  if (this.children === undefined) {
    // create children array
    this.children = [];
    // push child 
    this.children.push(child);
  } else {
    // if children exist, push child
    this.children.push(child);
  }
};

treeMethods.contains = function(target) { 
  // set result initially false
  var result = false;
  // if tree object has target, set result true
  if (this.value === target) {
    result = true;
  // if tree object has children, iterate
  } else if (this.children !== undefined) {
    for (var i = 0; i < this.children.length; i++) {
      // set previous child to current child
      var child = this.children[i];
      //search through new child
      result = result || child.contains(target);
    }
  }
  return result;
};



/*
 * Complexity: What is the time complexity of the above functions?
 addChild: constant O(1);
 contains: linear O(n);
 */
