const submitBtn = document.getElementById("submitBtn");
const likeBtn = document.querySelector(".like-btn");
const modal = document.getElementById("modal");
const modalTrigger = document.querySelector(".modal-trigger");

submitBtn.addEventListener("click", () => {
  if (submitBtn.classList.contains("loading")) return;

  submitBtn.classList.add("loading");

  setTimeout(() => {
    submitBtn.classList.remove("loading");
    submitBtn.classList.add("success");

    setTimeout(() => {
      submitBtn.classList.remove("success");
    }, 2000);
  }, 2000);
});

likeBtn.addEventListener("click", () => {
  likeBtn.classList.toggle("liked");
});

modalTrigger.addEventListener("click", () => {
  modal.classList.remove("hidden");
});

function closeModal() {
  modal.classList.add("hidden");
}