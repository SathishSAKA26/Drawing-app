"use strict";

// get elements
const canvasEl = document.getElementById("canvas");
const decBtn = document.getElementById("decrease");
const incBtn = document.getElementById("increase");
const sizeEl = document.getElementById("size");
const colorEl = document.getElementById("color");
const clearBtn = document.getElementById("clear");
const ctx = canvasEl.getContext("2d");

// global values
let size = 10;
let isPressed = false;
colorEl.value = 'black';
let color = colorEl.value;
let x;
let y;

// AddEventlistener
canvasEl.addEventListener("mousedown", (e) => {
  isPressed = true;
  x = e.offsetX;
  y = e.offsetY;
});

document.addEventListener("mouseup", (e) => {
  isPressed = false;
  x = undefined;
  y = undefined;
});

canvasEl.addEventListener("mousemove", (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;
    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);
    x = x2;
    y = y2;
  }
});

// Functions
function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}

function updateSizeOnScreen() {
  sizeEl.innerHTML = size;
}

// Button
incBtn.addEventListener("onClick", () => {
  size += 5;
  if (size > 5) {
    size = 5;
  }
  updateSizeOnScreen();
});

decBtn.addEventListener("onClick", () => {
  size -= 5;
  if (size < 5) {
    size = 5;
  }
  updateSizeOnScreen();
});

colorEl.addEventListener("change", (e) => (color = e.target.value));

clearBtn.addEventListener("click", () =>
  ctx.clearRect(0, 0, canvasEl.width, canvasEl.height)
);
