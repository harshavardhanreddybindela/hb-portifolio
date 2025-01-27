function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function toggleDetails(button) {
  const details = button.nextElementSibling; // Get the details block
  const isHidden = details.classList.contains('hidden');
  
  // Toggle the hidden class
  details.classList.toggle('hidden');
  
  // Update button text and arrow direction
  const icon = button.querySelector('.icon-arrow');
  const text = button.querySelector('span');
  
  if (isHidden) {
    text.textContent = 'See Less';
    icon.innerHTML = '&#x25B2;'; // Up arrow
  } else {
    text.textContent = 'See More';
    icon.innerHTML = '&#x25BC;'; // Down arrow
  }
}// JavaScript to Show/Hide Back to Top Button on Scroll
document.addEventListener('DOMContentLoaded', function () {
  const backToTopButton = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
          backToTopButton.style.display = 'block'; // Show button when scrolled down
      } else {
          backToTopButton.style.display = 'none'; // Hide button when at the top
      }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const menuLinks = document.querySelector(".menu-links");

  hamburgerMenu.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("open");
    menuLinks.classList.toggle("open");
  });
});
