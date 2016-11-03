var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(queueMethods);

  instance.storage = {};
  instance.length = 0;
  instance.counter = 0;
  instance.next = 0;

  return instance;


};

var queueMethods = {};

queueMethods.size = function() {
  return this.length;
};

queueMethods.enqueue = function(value) {
  this.storage[this.counter] = value;
  this.length++;
  this.counter++;
  return value;  
};

queueMethods.dequeue = function() {
  var temp = this.storage[this.next];
  delete this.storage[this.next];
  this.next++;
  if (this.length > 0) {
    this.length--;
  }
  return temp;
};

queueMethods.return = function() {
  return this.storage;
};