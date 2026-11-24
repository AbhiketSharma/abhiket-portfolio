
// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close mobile menu after clicking a navigation link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});

// Dynamic copyright year
document.getElementById("currentYear").textContent =
    new Date().getFullYear();

// Scroll progress indicator
window.addEventListener("scroll", () => {
    const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;

    const progress =
        scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;

    document.getElementById("scrollProgress").style.width =
        `${progress}%`;
}, { passive: true });

// Reveal elements while scrolling
const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12
    });

    revealElements.forEach(element => observer.observe(element));
} else {
    revealElements.forEach(element => element.classList.add("visible"));
}

// Active navigation link
const sections = document.querySelectorAll("main section[id]");
const navigationLinks = document.querySelectorAll(".nav-links a");

if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navigationLinks.forEach(link => {
                    link.classList.toggle(
                        "active",
                        link.getAttribute("href") === `#${entry.target.id}`
                    );
                });
            }
        });
    }, {
        rootMargin: "-35% 0px -55% 0px"
    });

    sections.forEach(section => sectionObserver.observe(section));
}

console.log("Abhiket DevOps Portfolio v2.0 loaded successfully!");
