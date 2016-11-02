var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    if (size === 0) {
      storage[0] = value;
      size++;
      return;
    }
    
    var keys = [];
    var values = [];
    
    for (var key in storage) {
      keys.push(key);
      values.push(storage[key]);
    }
    
    for (var i = 0; i < keys.length; i++) {
      storage[i + 1] = values[i];
    }

    storage[0] = value;
    size++;

  };

  someInstance.dequeue = function() {
    var temp = storage[size - 1];
    delete storage[size - 1];
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

