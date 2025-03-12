document.addEventListener("DOMContentLoaded", function () {
    filterProjects("top"); // Show only "top" projects by default
});

function filterProjects(category) {
    const projects = document.querySelectorAll("#project-list .project");

    projects.forEach(project => {
        // Show only projects that have the selected category
        project.style.display = project.classList.contains(category) ? "flex" : "none";
    });

    // Highlight the active button
    document.querySelectorAll(".filter-buttons button").forEach(btn => {
        btn.classList.remove("active");
    });

    document.querySelector(`button[onclick="filterProjects('${category}')"]`).classList.add("active");
}
