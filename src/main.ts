// @ts-nocheck
import "./style.css";

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const context = canvas.getContext("2d") as CanvasRenderingContext2D;
let W = window.innerWidth;
let H = window.innerHeight;

canvas.width = W;
canvas.height = H;

const fontSize = 9;
const columns = Math.floor(W / fontSize);
const drops: number[] = [];
for (let i = 0; i < columns; i++) {
  drops.push(0);
}
const str = "JavaScript Hacking Effect";
function draw() {
  context.fillStyle = "rgba(0,0,0,0.05)";
  context.fillRect(0, 0, W, H);
  context.fontSize = "700 " + fontSize + "px";
  // context.fontSize = "400px";
  context.fillStyle = "#00cc33";
  for (let i = 0; i < columns; i++) {
    const index = Math.floor(Math.random() * str.length);
    const x = i * fontSize;
    const y = drops[i] * fontSize;
    context.fillText(str[index], x, y);

    if (y >= canvas.height && Math.random() > 0.99) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}
draw();
setInterval(draw, 35);

const elem = document.documentElement as HTMLElement;
let bool = false;
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE11 */
    elem.msRequestFullscreen();
  }
}

/* Close fullscreen */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    /* IE11 */
    document.msExitFullscreen();
  }
}

document.addEventListener("dblclick", (e) => {
  console.log("dblclick");
  if (bool) {
    closeFullscreen();
    bool = false;
  } else {
    openFullscreen();
    bool = true;
  }
});

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  W = window.innerWidth;
  H = window.innerHeight;
});
