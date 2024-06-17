const currentTimeElement = document.getElementById('current-time');
const fpsElement = document.getElementById('fps');

let lastTime = performance.now();
let frameCount = 0;
let fps = 0;
let startTime;

function formatTime(date) {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const milliseconds = String(date.getMilliseconds()).padStart(3, '0');
    return `${hours}:${minutes}:${seconds}.${milliseconds}`;
}

function update() {
    const now = performance.now();
    if (!startTime) {
        startTime = new Date();
    }
    const elapsed = new Date(startTime.getTime() + now);
    currentTimeElement.textContent = formatTime(elapsed);

    frameCount++;
    const interval = now - lastTime;

    if (interval >= 1000) {  // Update FPS every 0.5 second for smoother FPS calculation
        fps = (frameCount / interval) * 1000;
        frameCount = 0;
        lastTime = now;
        fpsElement.textContent = fps.toFixed(2);
    }

    requestAnimationFrame(update);
}

requestAnimationFrame(update);
