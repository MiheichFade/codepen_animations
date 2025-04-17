const box = document.getElementById('box');

let rotation = 0;
let scale = 1;
let translateX = 0;
let translateY = 0;
let isSkewed = false;
let isTransparent = false;

function updateTransform() {
  let transform = `rotate(${rotation}deg) scale(${scale}) translate(${translateX}px, ${translateY}px)`;
  if (isSkewed) transform += ' skewX(25deg)';
  box.style.transform = transform;
}

function rotate() {
  rotation += 45;
  updateTransform();
}

function scaleUp() {
  scale += 0.1;
  updateTransform();
}

function scaleDown() {
  scale = Math.max(0.1, scale - 0.1);
  updateTransform();
}

function move(direction) {
  const step = 20;
  if (direction === 'left') translateX -= step;
  if (direction === 'right') translateX += step;
  if (direction === 'up') translateY -= step;
  if (direction === 'down') translateY += step;
  updateTransform();
}

function toggleSkew() {
  isSkewed = !isSkewed;
  updateTransform();
}

function toggleOpacity() {
  isTransparent = !isTransparent;
  box.style.opacity = isTransparent ? '0.3' : '1';
}

function reset() {
  rotation = 0;
  scale = 1;
  translateX = 0;
  translateY = 0;
  isSkewed = false;
  isTransparent = false;
  box.style.opacity = '1';
  updateTransform();
}