/**
 * Tourism Website - Main JavaScript File
 * Handles section navigation and interactivity
 */

/**
 * Display function to show/hide sections
 * @param {string} sectionId - The ID of the section to display
 */
function display(sectionId) {
  // Hide all sections
  const sections = [
    'sectionHome',
    'sectionFavouritePlaces',
    'sectionTajMahalDetailedView',
    'sectionGoldenTempleDetailedView',
    'sectionMysorePalaceDetailedView',
    'sectionVaranasiTempleDetailedView'
  ];

  sections.forEach(section => {
    document.getElementById(section).style.display = 'none';
  });

  // Show the selected section
  const selectedSection = document.getElementById(sectionId);
  if (selectedSection) {
    selectedSection.style.display = 'block';
    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

/**
 * Initialize page on load
 */
document.addEventListener('DOMContentLoaded', function() {
  // Show home section on page load
  display('sectionHome');

  // Add smooth scroll behavior to buttons
  const buttons = document.querySelectorAll('.button, .btn');
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      // Add animation class
      this.style.transition = 'all 0.3s ease';
    });
  });

  // Add keyboard navigation
  document.addEventListener('keydown', function(event) {
    // Press 'H' to go home
    if (event.key === 'h' || event.key === 'H') {
      display('sectionHome');
    }
  });

  console.log('Tourism website loaded successfully');
});

/**
 * Utility function to check if element is in viewport
 */
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

/**
 * Add scroll animations
 */
window.addEventListener('scroll', function() {
  const cards = document.querySelectorAll('.favourite-place-card-container, .detailed-view-card-container');
  cards.forEach(card => {
    if (isElementInViewport(card)) {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }
  });
});
