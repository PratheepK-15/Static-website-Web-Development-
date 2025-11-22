// dropdown
let dropdownTimeout;
const expertiseLink = document.getElementById('expertiseLink');
const dropdownMenu = expertiseLink.nextElementSibling;

expertiseLink.addEventListener('mouseover', () => {
  clearTimeout(dropdownTimeout);
  dropdownMenu.style.display = 'block';
});

expertiseLink.addEventListener('mouseleave', () => {
  dropdownTimeout = setTimeout(() => {
    dropdownMenu.style.display = 'none';
  }, 300); // 300ms delay
});

dropdownMenu.addEventListener('mouseover', () => {
  clearTimeout(dropdownTimeout);
});

dropdownMenu.addEventListener('mouseleave', () => {
  dropdownTimeout = setTimeout(() => {
    dropdownMenu.style.display = 'none';
  }, 300); // 300ms delay
});

//corefocus section
document.addEventListener("scroll", function () {
  const animatedElements = document.querySelectorAll(".fade-animate");

  animatedElements.forEach((element) => {
    if (isInViewport(element)) {
      element.classList.add("visible");
    }
  });
});

// Trigger animations on page load as well
window.addEventListener("load", function () {
  const animatedElements = document.querySelectorAll(".fade-animate");

  animatedElements.forEach((element) => {
    if (isInViewport(element)) {
      element.classList.add("visible");
    }
  });
});

// Helper function to check if the element is in viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.bottom >= 0
  );
}


// Function to handle scroll-triggered animations letterexplaination
function handleScrollAnimation() {
  const contentBoxes = document.querySelectorAll('.yuvooz-content-box');
  contentBoxes.forEach(box => {
    const boxPosition = box.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3; // Trigger when 70% of the screen is visible
    if (boxPosition < screenPosition) {
      box.classList.add('show');
    }
  });
}

// Trigger the animation when scrolling
window.addEventListener('scroll', handleScrollAnimation);

//whychooseus
document.addEventListener("DOMContentLoaded", function () {
  // Function to check if an element is in the viewport (even partially)
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    return (
      rect.top <= windowHeight && rect.bottom >= 0 // Partially visible in the viewport
    );
  }

  // Function to add 'visible' class when the element is in the viewport
  function handleScroll() {
    const elements = document.querySelectorAll('.wcu-heading, .wcu-para, .wcu-img');
    elements.forEach(function (element) {
      if (isInViewport(element)) {
        element.classList.add('visible'); // Add 'visible' class to trigger animation
      }
    });
  }

  // Initial page load event to add 'animate' class after page fully loads
  window.addEventListener('load', function () {
    // Add 'animate' class after the page is fully loaded
    document.querySelectorAll('.wcu-heading, .wcu-para, .wcu-img').forEach(function (element) {
      element.classList.add('animate'); // Apply initial hidden state with animation
    });

    // Trigger the scroll event to start the animations immediately if elements are in view
    handleScroll();

    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);
  });
});


