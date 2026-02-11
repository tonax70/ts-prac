const canvas = document.getElementById("myCanvas");
canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;

/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext("2d");

let speedX = 100; // pixels per second
let speedY = 100;
let lastTime = 0;
let radius = 10;

let ball = {
    radius : radius,
    x : radius,
    y : radius
}
// key event listener
let keys = {};
window.addEventListener("keydown", (e) => keys[e.code] = true);
window.addEventListener("keyup", (e) => keys[e.code] = false);

function update(deltaTime) {
    const incrX = () => ball.x += speedX * deltaTime;
    const incrY = () => ball.y += speedY * deltaTime;
    if (keys["KeyW"]) {
        if (speedY > 0) speedY = -speedY;
        incrY();
    }
    if (keys["KeyS"]) {
        if (speedY < 0) speedY = Math.abs(speedY);
        incrY();
    }
    if (keys["KeyA"]) {
        if (speedX > 0) speedX = -speedX;
        incrX();
    }
    if (keys["KeyD"]) {
        if (speedX < 0) speedX = Math.abs(speedX);
        incrX();
    }
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
