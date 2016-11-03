var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var instance = Object.create(stackMethods);

  instance.storage = {};
  instance.length = 0;

  return instance;
};

var stackMethods = {};

stackMethods.size = function() {
  return this.length;
};

stackMethods.push = function(value) {
  var storage = this.storage;
  var length = this.length;

  if (length === 0) {
    storage[length] = value;
    this.length++; 
    return;
  } else {
    storage[length] = value;
  }

  this.length++;
  
};

stackMethods.pop = function() {
  if (this.length !== 0) {
    var value = this.storage[this.length - 1];
    delete this.storage[this.length - 1];
    this.length--;
    return value;
  }
};

stackMethods.return = function() {
  return this.storage;
};