// =============== SCROLL SUAVE ===============
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// =============== ANIMAÇÃO SUAVE DE ENTRADA DAS SEÇÕES ===============
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});

// =============== ESTILO DAS ANIMAÇÕES ===============
const style = document.createElement('style');
style.textContent = `
  section {
    opacity: 0;
    transform: translateY(40px);
    transition: all 0.8s ease;
  }

  .visible {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
`;
document.head.appendChild(style);
