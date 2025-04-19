const root = document.documentElement;

let state = {
  rotate: 0,
  scale: 1,
  translateX: 0,
  translateY: 0,
  skew: 0,
  opacity: 1
};

function savePreviousValues() {
  root.style.setProperty("--prev-rotate", `${state.rotate}deg`);
  root.style.setProperty("--prev-scale", state.scale);
  root.style.setProperty("--prev-x", `${state.translateX}px`);
  root.style.setProperty("--prev-y", `${state.translateY}px`);
  root.style.setProperty("--prev-skew", `${state.skew}deg`);
  root.style.setProperty("--prev-opacity", state.opacity);
}

function applyState() {
  root.style.setProperty("--rotate", `${state.rotate}deg`);
  root.style.setProperty("--scale", state.scale);
  root.style.setProperty("--translate-x", `${state.translateX}px`);
  root.style.setProperty("--translate-y", `${state.translateY}px`);
  root.style.setProperty("--skew", `${state.skew}deg`);
  root.style.setProperty("--opacity", state.opacity);
}

function animateUpdate(callback) {
  savePreviousValues();
  callback();
  applyState();

  const box = document.getElementById("box");
  box.classList.remove("box");
  void box.offsetWidth; // перезапуск анимации
  box.classList.add("box");
}

function rotate() {
  animateUpdate(() => {
    state.rotate += 45;
  });
}

function scaleUp() {
  animateUpdate(() => {
    state.scale += 0.1;
  });
}

function scaleDown() {
  animateUpdate(() => {
    state.scale = Math.max(0.1, state.scale - 0.1);
  });
}

function move(direction) {
  const step = 20;
  animateUpdate(() => {
    if (direction === "left") state.translateX -= step;
    if (direction === "right") state.translateX += step;
    if (direction === "up") state.translateY -= step;
    if (direction === "down") state.translateY += step;
  });
}

function toggleSkew() {
  animateUpdate(() => {
    state.skew = state.skew === 0 ? 25 : 0;
  });
}

function toggleOpacity() {
  animateUpdate(() => {
    state.opacity = state.opacity === 1 ? 0.3 : 1;
  });
}

function reset() {
  animateUpdate(() => {
    state = {
      rotate: 0,
      scale: 1,
      translateX: 0,
      translateY: 0,
      skew: 0,
      opacity: 1
    };
  });
}
