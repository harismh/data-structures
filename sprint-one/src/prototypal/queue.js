var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var instance = Object.create(queueMethods);

  instance.storage = {};
  instance.length = 0;

  return instance;
};

var queueMethods = {};

queueMethods.size = function() {
  return this.length;
};

queueMethods.enqueue = function(value) {
  var storage = this.storage;
  var length = this.length;

  if (length === 0) {
    storage[0] = value;
    this.length++;
    return value;
  } else {
    var keys = []; 
    var values = [];
    for (var key in storage) {
      keys.push(key);
      values.push(storage[key]);
    }
    for (var i = 0; i < keys.length; i++) {
      storage[parseInt(keys[i]) + 1] = values[i];
    }
    storage[0] = value;
    this.length++;
    return value;
  }
};

queueMethods.dequeue = function() {
  if (this.length !== 0) {
    var value = this.storage[this.length - 1];
    delete this.storage[this.length - 1];
    this.length--;
    return value;
  }
};

queueMethods.return = function() {
  return this.storage;
};
