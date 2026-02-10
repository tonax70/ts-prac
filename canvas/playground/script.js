const canvas = document.getElementById("myCanvas");

// make the canvas display the full width
canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;

const ctx = canvas.getContext("2d");
ctx.fillStyle = '#fcb001';
// the canvas y direction is also upside down like lin lovec 2d

// draw a rectangle
ctx.fillRect(0,0,150,75);


// draw a line
ctx.moveTo(150, 0);
ctx.lineTo(300, 75);
// use the ink method
ctx.strokeStyle = "#fcb001"; // change stroke color
ctx.lineCap = "round"; // set linecap round
ctx.stroke();

// draw a line
ctx.beginPath();
ctx.moveTo(150, 75);
ctx.lineTo(300, 75);
ctx.lineWidth = 10; //change line width

// use the ink method
ctx.stroke();

ctx.beginPath();
// draw a line
ctx.moveTo(300, 0);
ctx.lineTo(300, 75);
// use the ink method
ctx.stroke();


// draw a circle
/*
beginPath() - begins a path
arc(x, y, r, startangle, endangle) - creates an arc/curve.
To create a circle with arc(): Set startangle to 0 and endangle to 2*Math.PI.
The x- and y-coordinates define the center of the circle. r defines the radius of the circle
*/
// Define a new path
ctx.beginPath();
ctx.arc(337.5, 37.5, 37.5, 0, 2*Math.PI);
ctx.stroke();