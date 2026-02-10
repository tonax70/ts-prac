const canvas = document.getElementById("myCanvas");
canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;

const ctx = canvas.getContext("2d");
ctx.fillStyle = '#fcb001';

// draw a rectangle
ctx.fillRect(0,0,150,75);


// draw a line
ctx.moveTo(38, 8);
ctx.lineTo(1000, 1000);
// use the ink method
ctx.stroke();