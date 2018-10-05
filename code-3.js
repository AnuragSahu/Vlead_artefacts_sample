
/*
Operators taken into consideration : ()+-*^/
Rest are ignored.
Operands taken into consideration : All alphabets and nummbers
*/
var tree_class = function(input_string){
	//Given an expression remove all unwanted symbols and spaces.
	//Build tree

}
// Represents the node in the tree. Will be displayed as a small circle in the browser.
// x, y --> x, y co-ordinates of the center of circle
// r    --> radius of the circle
// ctx  --> context of the canvas
// data --> data to be displayed (Only number)

var Node = function(x,y,r, ctx, data) {
  // left child of a node
  this.leftNode = null; 
  // right child of a node
  this.rightNode = null;
  
  // draw function. Responsible for drawing the node
  this.draw = function() {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2*Math.PI); 
    ctx.stroke();
    ctx.closePath();
    ctx.strokeText(data, x, y);
  };
  
  // Simple getters
  this.getData = function() { return data; }; 
  this.getX = function() { return x; };
  this.getY = function() { return y; };
  this.getRadius = function() { return r; };
  
  // Returns coordinate for the left child
  // Go back 3 times radius in x axis and 
  // go down 3 times radius in y axis
  this.leftCoordinate = function() {
    return {cx: (x - (3*r)), cy: (y + (3*r))}
  };
  // Same concept as above but for right child        
  this.rightCoordinate = function() {
    return {cx: (x + (3*r)), cy: (y+(3*r))}
  };
};

// Draws a line from one circle(node) to another circle (node) 
var Line = function() {
  // Takes 
  // x,y      - starting x,y coordinate
  // toX, toY - ending x,y coordinate
  this.draw = function(x, y, toX, toY, r, ctx) {
    var moveToX = x;
    var moveToY = y + r;
    var lineToX = toX;
    var lineToY = toY - r;
    ctx.beginPath();
    ctx.moveTo(moveToX, moveToY);
    ctx.lineTo(lineToX, lineToY);
    ctx.stroke(); 
  };
};
