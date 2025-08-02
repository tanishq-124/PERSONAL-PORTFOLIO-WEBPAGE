// Particles.js
particlesJS('particles-js', {
    particles: {
        number: { value: 60 },
        size: { value: 3 },
        move: { speed: 1 },
        line_linked: { enable: true, color: '#00bcd4' },
        color: { value: '#00bcd4' }
    }
});

// Parallax
const rellax = new Rellax('#parallax-bg');

// Dark/Light Mode
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    themeToggle.innerHTML = document.body.classList.contains('light-mode') 
        ? '<i class="fas fa-sun"></i>' 
        : '<i class="fas fa-moon"></i>';
});

// Back to Top
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    backToTop.style.display = window.scrollY > 200 ? 'block' : 'none';
});
backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Stats Counters
document.querySelectorAll('.counter').forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / 100;
        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 30);
        } else {
            counter.innerText = target;
        }
    };
    updateCount();
});

// Project Filters
const filterButtons = document.querySelectorAll('.filter-buttons button');
const projectCards = document.querySelectorAll('.project-card');
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        const category = button.getAttribute('data-filter');
        projectCards.forEach(card => {
            card.style.display = (category === 'all' || card.dataset.category === category) ? 'block' : 'none';
        });
    });
});

// Contact Form
document.getElementById('contactForm').addEventListener('submit', e => {
    e.preventDefault();
    alert('Message sent (dummy action)');
});
