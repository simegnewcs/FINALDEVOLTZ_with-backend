// Placeholder for any JS functionality
console.log("E-Learning Platform Loaded");
document.getElementById("searchInput").addEventListener("input", function () {
  let query = this.value.toLowerCase();
  let links = document.querySelectorAll(".nav-link");

  links.forEach(link => {
    if (link.textContent.toLowerCase().includes(query)) {
      link.style.display = "block";
    } else {
      link.style.display = "none";
    }
  });
});
document.getElementById("searchInput").addEventListener("focus", function () {
  this.style.backgroundColor = "#f0f0f0";
});
document.getElementById("searchInput").addEventListener("blur", function () {
    this.style.backgroundColor = "#fff";
    }
);
document.getElementById("searchInput").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    alert("Search functionality is not implemented yet.");
  }
});
document.getElementById("searchInput").addEventListener("keyup", function (event) {
  if (event.key === "Escape") {
    this.value = "";
    let links = document.querySelectorAll(".nav-link");
    links.forEach(link => link.style.display = "block");
  }
});
document.getElementById("searchInput").addEventListener("paste", function (event) {
  event.preventDefault();
  alert("Pasting is disabled in the search input.");
});
document.getElementById("searchInput").addEventListener("copy", function (event) {
  event.preventDefault();
  alert("Copying is disabled in the search input.");
});

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
}

window.onload = function () {
  if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
  }
};

function handleLogin(e) {
  e.preventDefault();
  const user = document.getElementById("loginUsername").value;
  localStorage.setItem("loggedInUser", user);
  alert("Logged in as " + user);
  location.reload();
}

