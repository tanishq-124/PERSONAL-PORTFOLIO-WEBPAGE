document.addEventListener("DOMContentLoaded", () => {
  console.log("Modernized Portfolio Loaded");

  // Optional: Add a simple scroll animation
  const fadeElements = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });

  fadeElements.forEach(el => observer.observe(el));
});
