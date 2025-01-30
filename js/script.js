// Hamburger Menu Toggle
function toggleMenu() {
  const hamburgerIcon = document.querySelector('.hamburger-icon');
  const menuLinks = document.querySelector('.menu-links');

  if (!hamburgerIcon || !menuLinks) {
    console.error('Hamburger menu or links not found.');
    return;
  }

  menuLinks.classList.toggle('open');
}

// Toggle Details for Both Experience and Projects
function toggleDetails(button) {
  // Find the closest container that holds the details
  const container = button.closest('.details-container') || button.closest('.experience-block');

  if (!container) {
    console.error('Parent container not found.');
    return;
  }

  // Look for the details section within the container
  const details = container.querySelector('.project-details') || container.querySelector('.experience-details');

  if (!details) {
    console.error('Details section not found.');
    return;
  }

  // Toggle visibility of the details section
  details.classList.toggle('hidden');

  // Update button text and arrow direction
  const icon = button.querySelector('.icon-arrow');
  const text = button.querySelector('span');

  if (details.classList.contains('hidden')) {
    text.textContent = 'See More';
    if (icon) icon.innerHTML = '&#x25BC;'; // Down arrow
  } else {
    text.textContent = 'See Less';
    if (icon) icon.innerHTML = '&#x25B2;'; // Up arrow
  }

  // Ensure features are shown or hidden based on the toggle state
  if (!details.classList.contains('hidden')) {
    details.style.display = 'block'; // Show the details
  } else {
    details.style.display = 'none'; // Hide the details
  }
}