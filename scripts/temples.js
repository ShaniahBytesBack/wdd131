document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("currentyear").textContent = new Date().getFullYear();

    document.getElementById("lastModified").textContent = document.lastModified;

    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");

    hamburger.addEventListener("click", () => {
        navMenu.style.display = navMenu.style.display === "flex" ? "none" : "flex";
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth >= 768) {
            navMenu.style.display = "flex";
        } else {
            navMenu.style.display = "none";
        }
    });
});
