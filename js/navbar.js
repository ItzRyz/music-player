document.addEventListener("DOMContentLoaded", () => {
    let favicon = document.querySelector("link[rel~='icon']");
    if (!favicon) {
        favicon = document.createElement('link');
        favicon.rel = 'icon';
        favicon.type = 'image/png';
        document.head.appendChild(favicon);
    }
    favicon.href = 'assets/favicon.png';

    const headerElement = document.getElementById("global-navbar");

    if (headerElement) {
        const path = window.location.pathname;

        const isHome = path === "/" || path.endsWith("index") || path.endsWith("index.html") || path === "";
        const isDiscover = path.includes("discover");
        const isRadio = path.includes("radio");
        const isLibrary = path.includes("library");

        let pageTitle = "";

        if (isDiscover) pageTitle = "Discover";
        if (isRadio) pageTitle = "Radio Live";
        if (isLibrary) pageTitle = "Your Library";

        if (pageTitle) {
            document.title = `${pageTitle} | VaaStream`;
        } else {
            document.title = `VaaStream`;
        }
        headerElement.innerHTML = `
            <div class="logo">VaaStream<span>.</span></div>
            <nav>
                <ul class="nav-links">
                    <li><a href="/" class="${isHome ? 'active' : ''}">Home</a></li>
                    <li><a href="discover" class="${isDiscover ? 'active' : ''}">Discover</a></li>
                    <li><a href="radio" class="${isRadio ? 'active' : ''}">Radio</a></li>
                    <li><a href="library" class="${isLibrary ? 'active' : ''}">Library</a></li>
                </ul>
            </nav>
            <div class="user-profile"><div class="avatar"></div></div>
        `;
    }
});