const darkModeBtn = document.getElementById("darkModeBtn");
const swapImageBtn = document.getElementById("swapImageBtn");
const localImage = document.getElementById("localImage");

// Check saved mode on page load
if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    darkModeBtn.textContent = "Switch to Light Mode";
}

// Toggle Light/Dark Mode using classList.toggle
darkModeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        darkModeBtn.textContent = "Switch to Light Mode";
        localStorage.setItem("darkMode", "enabled");
    } else {
        darkModeBtn.textContent = "Switch to Dark Mode";
        localStorage.setItem("darkMode", "disabled");
    }
});

// Swap Image using this.src includes logic from task
swapImageBtn.addEventListener("click", function () {
    localImage.src = localImage.src.includes("photo.jpeg")
        ? "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/24701-nature-natural-beauty.jpg/1280px-24701-nature-natural-beauty.jpg"
        : "photo.jpeg";
});