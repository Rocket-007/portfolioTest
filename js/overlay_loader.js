document.addEventListener("DOMContentLoaded", function () {
    const projects = document.querySelectorAll(".project");
    const overlay = document.getElementById("project-overlay");
    const iframe = document.getElementById("overlay-iframe");
    const closeOverlay = document.getElementById("close-overlay");

    projects.forEach(project => {
        project.addEventListener("click", function () {
            const link = this.querySelector("a").href; // Get the project link
            iframe.src = link; // Load the project page inside the iframe
            overlay.classList.remove("hidden"); // Show the overlay
            overlay.style.display = "flex"; // Ensure it's visible
        });
    });

    closeOverlay.addEventListener("click", function () {
        overlay.classList.add("hidden");
        overlay.style.display = "none"; // Hide the overlay
        iframe.src = ""; // Clear the iframe content
    });
});
