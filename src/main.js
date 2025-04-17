import './style.css'

document.querySelector('#app').innerHTML = ``

// Initialize main page functionality
document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu functionality
  function toggleMenu() {
    const mobileMenu = document.querySelector('.mobile-menu-items');
    if (mobileMenu) {
      mobileMenu.classList.toggle('active');
    }
  }

  const mobileMenuButton = document.querySelector('.mobile-menu');
  if (mobileMenuButton) {
    mobileMenuButton.addEventListener('click', toggleMenu);
  }

  // Form submission handling
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // Add form handling logic here
      console.log('Form submitted');
    });
  }
});
