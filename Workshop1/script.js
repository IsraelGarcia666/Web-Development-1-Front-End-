function showMessage() {
  alert("Hello from JavaScript!");
}
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    themeToggle.textContent = "☀️ Light mode";
  } else {
    themeToggle.textContent = "🌙 Dark mode";
  }
});
