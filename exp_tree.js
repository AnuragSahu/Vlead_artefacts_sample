'use strict';
var tree = d3.layout.tree()
    .size([960 - 50, 600 - 50]);

var root = {},
    nodes = tree(root);

root.parent = root;
root.px = root.x;
root.py = root.y;

var diagonal = d3.svg.diagonal();

var svg = d3.select("body").append("svg")
    .attr("width", 960)
    .attr("height", 600)
  .append("g")
    .attr("transform", "translate(10,30)");

var initialNode = svg.selectAll(".node"),
    node = initialNode,
    link = svg.selectAll(".link");


var duration = 0.75*2000;

var restoreInitial = function() {
  root = {};
  nodes = tree(root);
  root.parent = root;
  root.px = root.x;
  root.py = root.y;
  animateSwap();
  node = initialNode;
};

var insertNode = function(value) {
  
  if (nodes[0].value === undefined) {
    nodes[0].value = value;
    nodes[0].id = 0;
  } 
  else {
    var n = {id: nodes.length, value: value},
        p = nodes[Math.ceil((nodes.length-2)/2)];
    if (p.children) p.children.push(n); else p.children = [n];
    nodes.push(n);
  }
  node = node.data(tree.nodes(root), function(d) { return d.id; });
  link = link.data(tree.links(nodes), function(d) { return d.source.id + "-" + d.target.id; });
  var nodeEnter = node.enter().append('g')
      .attr('class', 'node');
  nodeEnter.append("circle")
      .attr("r",25)
      .attr("cx", function(d) { return d.parent.px; })
      .attr("cy", function(d) { return d.parent.py; })
      .style("opacity", 1);
  nodeEnter.append('text')
      .attr("x", function(d) { return d.parent.px; })
      .attr("y", function(d) { return d.parent.py; })
      .attr('text-anchor', function(d) {
        return d.children || d._children ? 'end' : 'start'; })
      .text(function(d) { return d.value; })
      .style('fill-opacity', 1);
  link.enter().insert("path", ".node")
      .attr("class", "link")
      .attr("d", function(d) {
        var o = {x: d.source.px, y: d.source.py};
        return diagonal({source: o, target: o});
      });
  var t = svg.transition()
      .duration(duration);

  t.selectAll(".link")
      .attr("d", diagonal);

  t.selectAll("circle")
      .attr("cx", function(d) { return d.px = d.x; })
      .attr("cy", function(d) { return d.py = d.y; });

  t.selectAll("text")
      .attr("x", function(d) { return d.px = d.x; })
      .attr("y", function(d) { return d.py = d.y; });
};

var swapNodes = function(index, parentInd) {
  var current = nodes[index];
  var parent = nodes[parentInd];
  current.x = current.x ^ parent.x;
  parent.x = current.x ^ parent.x;
  current.x = current.x ^ parent.x;

  current.px = current.px ^ parent.px;
  parent.px = current.px ^ parent.px;
  current.px = current.px ^ parent.px;

  current.y = current.y ^ parent.y;
  parent.y = current.y ^ parent.y;
  current.y = current.y ^ parent.y;

  current.py = current.py ^ parent.py;
  parent.py = current.py ^ parent.py;
  current.py = current.py ^ parent.py;

  current.depth = current.depth ^ parent.depth;
  parent.depth = current.depth ^ parent.depth;
  current.depth = current.depth ^ parent.depth;

  parent.children = parent.children || [];

  var orphanIndex;

  var parentOrphan = parent.children.filter(function(child, index) {
    if (child.id !== current.id) 
      orphanIndex = index;
    return child.id !== current.id;
  });
  var currentOrphans = current.children || [];
  parent.children = current.children;
  current.children = [parent];
  if (orphanIndex !== undefined) {
    current.children.splice(orphanIndex,0,parentOrphan[0]);
  }
  parent.parent.children = parent.parent.children || [];
  parent.parent.children.forEach(function(child, i, children) {
    if (child.id === parent.id) {
      children[i] = current;
    }
  });

  current.parent = parent.parent === parent ? current : parent.parent;
  parent.parent = current;
  parentOrphan.forEach(function(child) {
    child.parent = current;
  });
  currentOrphans.forEach(function(child) {
    child.parent = parent;
  });

  var temp = nodes[index];
  nodes[index] = nodes[parentInd];
  nodes[parentInd] = temp;
  if (index === 0 || parentInd === 0) {
    root = nodes[0];
    root.parent = root;
    root.px = root.x;
    root.py = root.y;
  }
  animateSwap();
};

var swapRoot = function() {
  var newRoot = nodes.pop();
  var oldRoot = nodes[0];
  nodes[0] = newRoot;
  root = newRoot;
  newRoot.x = oldRoot.x;
  newRoot.y = oldRoot.y;
  newRoot.px = oldRoot.px;
  newRoot.py = oldRoot.xpy
  newRoot.depth = oldRoot.depth;
  oldRoot.children.forEach(function(child) {
    child.parent = newRoot;
  });
  newRoot.children = oldRoot.children;
  newRoot.parent.children = newRoot.parent.children.filter(function(child) {
    return child.id !== newRoot.id;
  });
  newRoot.parent = newRoot;
  newRoot.px = newRoot.x;
  newRoot.py = newRoot.y;
  animateSwap();
};

var animateSwap = function() {

  node = node.data(tree.nodes(root), function(d) { return d.id; });
  node.exit().remove();
  link = link.data(tree.links(nodes), function(d) { return d.source.id + "-" + d.target.id; });
  link.enter().insert("path", ".node")
      .attr("class", "link")
      .attr("d", function(d) {
        var o = {x: d.source.px, y: d.source.py};
        return diagonal({source: o, target: o});
      });
  link.exit().remove();
  var t = svg.transition()
      .duration(duration);
  t.selectAll(".link")
      .attr("d", diagonal);
  t.selectAll("circle")
      .attr("cx", function(d) { return d.px = d.x; })
      .attr("cy", function(d) { return d.py = d.y; });
  t.selectAll("text")
      .attr("x", function(d) { return d.px = d.x; })
      .attr("y", function(d) { return d.py = d.y; });
};
