const btn = document.getElementById("themeSwitcher");

btn.onclick = () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
};
