function openSearch() {
    document.getElementById("searchOverlay").classList.add("active");
    document.getElementById("searchInput").focus();
}

function closeSearch() {
    document.getElementById("searchOverlay").classList.remove("active");
}

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeSearch();
    }
});

function searchSite() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const results = document.getElementById("searchResults");

    if (input.length === 0) {
        results.innerHTML = "<p>Kezdj el gépelni a kereséshez...</p>";
        return;
    }

    const pages = [
        {
            name: "Képregények",
            description: "A The Hangman képregényei",
            url: "kepregenyek.html"
        },
        {
            name: "Karakterek",
            description: "Az univerzum karakterei",
            url: "karakterek.html"
        },
        {
            name: "The Hangman",
            description: "A főszereplő karakterlapja",
            url: "karakterek.html"
        }
    ];

    const found = pages.filter(page =>
        page.name.toLowerCase().includes(input) ||
        page.description.toLowerCase().includes(input)
    );

    if (found.length === 0) {
        results.innerHTML = "<p>Nem található ilyen tartalom.</p>";
        return;
    }

    results.innerHTML = found.map(page => `
        <a href="${page.url}" style="
            display:block;
            padding:20px 0;
            border-bottom:1px solid #222;
        ">
            <strong style="
                font-family:'Oswald',sans-serif;
                font-size:24px;
            ">${page.name}</strong>
            <p style="
                color:#666;
                margin-top:5px;
            ">${page.description}</p>
        </a>
    `).join("");
}