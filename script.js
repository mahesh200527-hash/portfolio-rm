
// Initialize Lucide icons
lucide.createIcons();

// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {

    const isOpen = navMenu.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.innerHTML = isOpen
        ? '<i data-lucide="x"></i>'
        : '<i data-lucide="menu"></i>';

    lucide.createIcons();
});

// Close menu after clicking navigation link
document.querySelectorAll("#navMenu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.innerHTML = '<i data-lucide="menu"></i>';

        lucide.createIcons();
    });

});

// Automatically update copyright year
document.getElementById("year").textContent =
    new Date().getFullYear();

// Contact form validation
const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", (event) => {

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {

        event.preventDefault();

        alert("Please fill in all fields.");

        return;
    }

    if (message.length < 10) {

        event.preventDefault();

        alert("Please enter at least 10 characters.");

        return;
    }

    // FormSubmit handles the actual email submission.
});
