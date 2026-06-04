document.addEventListener("DOMContentLoaded", () => {
    const path = window.location.pathname.split("/").pop();

    const titleMap = {
        "": "Home",
        "index": "Home",
        "discover": "Explore Music",
        "radio": "Live Radio Stations",
        "library": "Saved Collection"
    };

    const currentPage = titleMap[path] || "Home";

    document.title = `${currentPage} • VibeStream`;
});