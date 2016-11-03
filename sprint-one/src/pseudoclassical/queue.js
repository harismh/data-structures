var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.storage = {};
  this.length = 0;
  this.counter = 0;
  this.next = 0;

};

Queue.prototype.size = function() {
  return this.length;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.counter] = value;
  this.length++;
  this.counter++;
  return value;  
};

Queue.prototype.dequeue = function() {
  var temp = this.storage[this.next];
  delete this.storage[this.next];
  this.next++;
  if (this.length > 0) {
    this.length--;
  }
  return temp;
};

Queue.prototype.return = function() {
  return this.storage;
};