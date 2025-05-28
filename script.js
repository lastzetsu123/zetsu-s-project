// Add hover scale effect for nav links and project/skill cards
const navLinks = document.querySelectorAll('nav a');
const cards = document.querySelectorAll('.project, .skill');

navLinks.forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.style.transform = 'scale(1.1)';
    link.style.transition = 'transform 0.3s ease';
  });
  link.addEventListener('mouseleave', () => {
    link.style.transform = 'scale(1)';
  });
});

cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-10px) scale(1.05)';
    card.style.transition = 'transform 0.3s ease';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0) scale(1)';
  });
});

// Scroll fade-in effect for sections
const sections = document.querySelectorAll('section');

function checkFadeIn() {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.classList.add('fade-in');
    } else {
      section.classList.remove('fade-in');
    }
  });
}
window.addEventListener('scroll', checkFadeIn);
window.addEventListener('load', checkFadeIn);
document.addEventListener("DOMContentLoaded", function () {
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const closeBtn = document.getElementById("close-btn");
  const nav = document.getElementById("navbar");

  hamburgerBtn.addEventListener("click", () => {
    nav.classList.add("show");
    closeBtn.classList.add("show");
    hamburgerBtn.style.display = "none";
  });

  closeBtn.addEventListener("click", () => {
    nav.classList.remove("show");
    closeBtn.classList.remove("show");
    hamburgerBtn.style.display = "block";
  });
});
