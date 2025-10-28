// Smooth scrolling for navigation
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Contact form simulation
document.getElementById('contact-form').addEventListener('submit', e => {
  e.preventDefault();
  alert("Thank you for reaching out! I'll get back to you soon 😊");
  e.target.reset();
});
