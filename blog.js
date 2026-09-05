const posts = [
    {
        id: "why-blogs-still-matter",
        title: "Why Blogs Still Matter in 2050",
        date: "Signal • 2050-09-01",
        tag: "Systems",
        category: "Systems",
        href: "post-why-blogs-still-matter.html",
        excerpt:
            "In a world of ephemeral feeds, a blog is a long-term memory node. It’s where ideas can compound instead of vanish."
    },
    {
        id: "designing-for-long-horizons",
        title: "Designing for Long Horizons (Designing for 2050)",
        date: "Signal • 2050-08-12",
        tag: "Design",
        category: "Design",
        href: "post-designing-for-long-horizons.html",
        excerpt:
            "Most products are built for quarters, not decades. Long-horizon design asks: what still works when everything else changes?"
    },
    {
        id: "thinking-in-infrastructure",
        title: "Thinking in Infrastructure, Not Features",
        date: "Signal • 2050-07-30",
        tag: "Tech",
        category: "Tech",
        href: "post-thinking-in-infrastructure.html",
        excerpt:
            "Features are surface. Infrastructure is story. The future belongs to people who can see the underlying systems."
    },
    {
        id: "the-personal-web-returns",
        title: "The Personal Web Returns",
        date: "Signal • 2050-06-18",
        tag: "Future",
        category: "Future",
        href: "post-the-personal-web-returns.html",
        excerpt:
            "After decades of platform centralization, owning your own corner of the web becomes a quiet form of resistance."
    }
];

const container = document.getElementById("posts");
const themeToggle = document.getElementById("toggleTheme");
const catButtons = document.querySelectorAll(".cat-btn");

function renderPosts(filter = "all") {
    if (!container) return;
    container.innerHTML = "";
    posts
        .filter(p => filter === "all" || p.category === filter)
        .forEach(post => {
            const card = document.createElement("article");
            card.className = "post-card glass";
            card.innerHTML = `
                <div class="post-glow"></div>
                <div class="post-meta">${post.tag} • ${post.date}</div>
                <h2>${post.title}</h2>
                <p class="post-excerpt">${post.excerpt}</p>
            `;
            card.addEventListener("click", () => {
                window.location.href = post.href;
            });
            container.appendChild(card);
        });
}

if (container) {
    renderPosts();
}

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("theme-light");
        document.body.classList.toggle("theme-dark");
        themeToggle.textContent = document.body.classList.contains("theme-dark") ? "☾" : "☼";
    });
}

if (catButtons.length) {
    catButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            catButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            const cat = btn.dataset.cat;
            renderPosts(cat === "all" ? "all" : cat);
        });
    });
}
