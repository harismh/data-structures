var Tree = function(value) {
  var newTree = {};
  
  newTree.value = value;
  newTree.children = undefined;

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
  if (this.children === undefined) {
    this.children = [];
    this.children.push(child);
  } else {
    this.children.push(child);
  }
};

treeMethods.contains = function(target) { 
  var result = false;
  if (this.value === target) {
    result = true;
  } else if (this.children !== undefined) {
    for (var i = 0; i < this.children.length; i++) {
      var child = this.children[i];
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
