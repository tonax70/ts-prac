const canvas = document.getElementById("myCanvas");

// make the canvas display the full width
canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;

/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext("2d");
ctx.fillStyle = '#fcb001';
// the canvas y direction is also upside down like lin lovec 2d

// draw a rectangle
ctx.fillRect(0,0,150,75);


ctx.beginPath();
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


// rectangle
ctx.beginPath();

//define a rectangle, fillRect on top
ctx.rect(375, 0, 100, 200);
ctx.stroke();


// stroke rect: draw rect without using the stroke method beacuse it's already contains it
// Blue rectangle
ctx.lineWidth = "10";
ctx.strokeStyle = "blue";
ctx.strokeRect(50, 50, 150, 80);

// The clearRect() method is used to clear a rectangular area of the canvas.
// The cleared rectangle is transparent.
ctx.fillStyle = "green";
ctx.fillRect(10,10, 150,100);

ctx.clearRect(60,35, 50,50);


// circle
//arc method use to draw a circle

ctx.beginPath();
ctx.arc(95,50,40,0,2*Math.PI);
ctx.stroke();

// circle with fillstyle
ctx.beginPath();
ctx.arc(200, 50, 40, 0, 2 * Math.PI);
ctx.fillStyle = "red";
ctx.fill();
ctx.lineWidth = 4;
ctx.strokeStyle = "blue";
ctx.stroke();


//circle clockwise or counterclockwise
ctx.beginPath();
ctx.arc(300, 50, 40, 0, 0.5 * Math.PI, true);
ctx.stroke();