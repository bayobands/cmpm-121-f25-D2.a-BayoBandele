import exampleIconUrl from "./noun-paperclip-7598668-00449F.png";
import "./style.css";

document.body.innerHTML = "";

// --- Title ---
const title = document.createElement("h1");
title.textContent = "Sticker Sketchpad";
document.body.appendChild(title);

// --- Canvas ---
const canvas = document.createElement("canvas");
canvas.width = 256;
canvas.height = 256;
canvas.id = "sketchCanvas";
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d")!;

// --- Clear Button ---
const clearBtn = document.createElement("button");
clearBtn.textContent = "Clear";
document.body.appendChild(clearBtn);

// --- Drawing State ---
let isDrawing = false;
let lastX = 0;
let lastY = 0;

// Begin drawing (mouse down)
canvas.addEventListener("mousedown", (e) => {
  const rect = canvas.getBoundingClientRect();
  lastX = e.clientX - rect.left;
  lastY = e.clientY - rect.top;
  isDrawing = true;
});

// Draw as mouse moves
canvas.addEventListener("mousemove", (e) => {
  if (!isDrawing) return;

  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(x, y);
  ctx.stroke();

  lastX = x;
  lastY = y;
});

// Stop drawing
canvas.addEventListener("mouseup", () => {
  isDrawing = false;
});
canvas.addEventListener("mouseleave", () => {
  isDrawing = false;
});

// Clear button behavior
clearBtn.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

// Example image (optional)
const example = document.createElement("p");
example.innerHTML = `Example asset: <img src="${exampleIconUrl}" class="icon" />`;
document.body.appendChild(example);
