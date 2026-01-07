const btn = document.getElementById("themeSwitcher");

btn.onclick = () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
};

const newPostBtn = document.getElementById("newPostBtnInput");
const modalElement = document.getElementById("postModal");

newPostBtn.addEventListener("click", () => {
  const modal = new bootstrap.Modal(modalElement);
  modal.show();
  setTimeout(() => {
    document.getElementById("writePostInput").focus();
  }, 300);
});
