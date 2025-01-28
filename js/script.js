function toggleMenu() {
  const hamburgerIcon = document.querySelector('.hamburger-icon');
  const menuLinks = document.querySelector('.menu-links');
  
  hamburgerIcon.classList.toggle('open');
  menuLinks.classList.toggle('open');
}


function toggleDetails(button) {
  // Find the details section within the same container
  const details = button.closest('.details-container').querySelector('.project-details');

  if (!details) {
    console.error('Details section not found for this button.');
    return;
  }

  const isHidden = details.classList.contains('hidden');

  // Toggle visibility
  details.classList.toggle('hidden');
  details.classList.toggle('visible');

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
}

// JavaScript to Show/Hide Back to Top Button on Scroll
document.addEventListener("DOMContentLoaded", function () {
  const backToTopButton = document.getElementById("back-to-top");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopButton.style.display = "block"; // Show button when scrolled down
    } else {
      backToTopButton.style.display = "none"; // Hide button when at the top
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
