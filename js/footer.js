document.addEventListener("DOMContentLoaded", () => {
    const footerElement = document.getElementById("global-footer");

    if (footerElement) {
        footerElement.innerHTML = `
            <p>&copy; 2026 VaaStream. Crafted with passion.</p>
            <div class="footer-links">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
            </div>
        `;
    }
});