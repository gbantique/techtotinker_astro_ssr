function toggleTheme() {
  var element = document.documentElement;
  var currentTheme = element.getAttribute("data-theme");
  var newTheme = currentTheme === "dark" ? "light" : "dark";

  element.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);

  var icon = document.getElementById("mode-icon");
  icon.classList.toggle("fa-moon", newTheme === "dark");
  icon.classList.toggle("fa-sun", newTheme === "light");
  console.log('toggleTheme()')
}

// Apply saved theme on page load
document.addEventListener("DOMContentLoaded", () => {
  var savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
    var icon = document.getElementById("mode-icon");
    icon.classList.toggle("fa-moon", savedTheme === "dark");
    icon.classList.toggle("fa-sun", savedTheme === "light");
  }
});

document.getElementById("mode-icon").addEventListener("click", toggleTheme);