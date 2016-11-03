var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var next = 0;
  var counter = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[counter] = value;
    size++;
    counter++;
    return value;  
  };

  someInstance.dequeue = function() {
    var temp = storage[next];
    delete storage[next];
    next++;
    if (size > 0) {
      size--;
    }
    return temp;
  };

  someInstance.size = function() {
    return size;
  };

  someInstance.return = function() {
    return storage;
  };

  return someInstance;
};

