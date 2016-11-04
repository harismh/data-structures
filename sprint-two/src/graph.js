// Instantiate a new graph
var Graph = function() {
  this.graph = {};
  this.edges = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var newNode = {value: node};
  this.graph[node] = newNode;
  this.edges[node] = {};
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.graph[node]) {
    return true;
  } else {
    return false;
  }
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var key in this.edges) {
    delete this.edges[key][node];
  }
  
  delete this.edges[node];
  delete this.graph[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.edges[fromNode][toNode] || false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (this.graph[fromNode] && this.graph[toNode]) {
    this.edges[fromNode][toNode] = true;
    this.edges[toNode][fromNode] = true;
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if (this.edges[fromNode] && this.edges[toNode]) {
    delete this.edges[fromNode][toNode];
    delete this.edges[toNode][fromNode];
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  _.each(this.graph, function(node) {
    cb(node.value);
  });

};

/*
 * Complexity: What is the time complexity of the above functions?
 addNode: constant O(1)
 contains: constant O(1)
 removeNode: linear O(n) // due to unknown number of edges
 addEdge: constant O(1)
 hasEdge: constant O(1)
 removeEdge: constant O(1)
 forEachNode: linear O(n)
 */


