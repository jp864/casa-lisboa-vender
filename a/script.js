// Wait until DOM content is fully loaded before running the script
document.addEventListener("DOMContentLoaded", function() {
    // ---- Image Hover Effects ----
    const galleryImages = document.querySelectorAll(".image-gallery img");

    galleryImages.forEach(image => {
        image.addEventListener("mouseenter", function() {
            this.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
            this.style.transform = "scale(1.05)";
            this.style.boxShadow = "0 6px 20px rgba(0, 0, 0, 0.2)";
        });

        image.addEventListener("mouseleave", function() {
            this.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
            this.style.transform = "scale(1)";
            this.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.1)";
        });
    });

    // ---- Smooth Scroll for Anchor Links ----
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

    smoothScrollLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,  // Adjust for header space
                    behavior: "smooth"
                });
            }
        });
    });
});
