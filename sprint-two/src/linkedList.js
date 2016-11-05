var LinkedList = function() {
  // create list object 
  var list = {};
  // add head and tail properties
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // instantiate new node object
    var node = Node(value);
    // check to see if list is empty
    if (list.head === null) {
      // if empty, point head and tail to node
      list.head = node;
      list.tail = node;
    // else set next to new node and tail to new node
    } else {
      list.tail.next = node;
      list.tail = node;
    }
  };

  list.removeHead = function() {
    // save current node to old
    var old = list.head;
    // set head to next node in list
    list.head = old.next;
    // remove node
    return old.value;
  };

  list.contains = function(target) { 
    var recurse = function(node) {
      // if node is target, return true
      if (node.value === target) {
        return true;
      // if at end of the list, return false
      } else if (node.next === null) {
        return false;
      // continue to next if target not found
      } else {
        node = node.next;
        return recurse(node, target);
      }
    };
    //call recurse helper function with first node
    return recurse(list.head);
  };

  //return list object
  return list;
};

var Node = function(value) {
  //create node object
  var node = {};
  //add passed in value and next properties
  node.value = value;
  node.next = null;
  //return object
  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 addToTail is O(1), constant
 removeHead is O(1), constant
 contains is O(n), linear
 */
