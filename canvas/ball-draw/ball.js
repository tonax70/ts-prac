const canvas = document.getElementById("myCanvas");
canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;

/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext("2d");

let speed = 100; // pixels per second
let lastTime = 0;
let radius = 50;

let ball = {
    radius : radius,
    x : radius,
    y : radius
}

function update(deltaTime) {
    ball.x += speed * deltaTime;
}

function draw() {
    ctx.beginPath();
    ctx.strokeStyle = 'blue'
    ctx.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI);
    ctx.stroke();
}

function gameLoop(timestamp) {
    const deltaTime = (timestamp - lastTime) / 1000; // convert to seconds
    lastTime = timestamp;

    update(deltaTime);
    draw();

    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
