const card = document.getElementById("card");

// Параллакс
card.addEventListener("mousemove", (e) => {
  const rect = card.getBoundingClientRect();
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const offsetX = e.clientX - rect.left - centerX;
  const offsetY = e.clientY - rect.top - centerY;

  const rotateX = -(offsetY / 15);
  const rotateY = offsetX / 15;

  card.style.transform = `translateY(0) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

card.addEventListener("mouseleave", () => {
  card.style.transform = "translateY(0)";
});

// Вспышка при клике
card.addEventListener("click", () => {
  card.classList.remove("flash");
  void card.offsetWidth;
  card.classList.add("flash");
});

// Появление при скролле
function revealOnScroll() {
  const rect = card.getBoundingClientRect();
  if (rect.top < window.innerHeight - 100) {
    card.classList.add("visible");
    window.removeEventListener("scroll", revealOnScroll);
  }
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);