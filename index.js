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



// FAQ:
// Function to check if an element is in viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top <= (window.innerHeight || document.documentElement.clientHeight);
}

// Scroll event listener to trigger animations
document.addEventListener("scroll", function () {
  const animatedElements = document.querySelectorAll(".scroll-animate");

  animatedElements.forEach((element) => {
      if (isInViewport(element)) {
          element.classList.add("visible");
      }
  });
});

// Trigger animations on page load as well
window.onload = function () {
  const animatedElements = document.querySelectorAll(".scroll-animate");

  animatedElements.forEach((element) => {
      if (isInViewport(element)) {
          element.classList.add("visible");
      }
  });
};



// text col and button col
document.addEventListener("DOMContentLoaded", function () {
  const animatedElements = document.querySelectorAll('.animated-text, .animated-button');

  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('in-view');
              observer.unobserve(entry.target); // Stop observing once animation is triggered
          }
      });
  });

  animatedElements.forEach(element => {
      observer.observe(element);
  });
});



let slideIndex = 0;
showSlides();

function currentSlide(n) {
  slideIndex = n;
  showSlides();
}

function showSlides() {
  const slides = document.getElementsByClassName("testimonial-block");
  const dots = document.getElementsByClassName("dot");

  // Reset all testimonials
  for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  // Loop through the testimonial blocks and display the current slide
  for (let i = slideIndex; i < slideIndex + 2; i++) {
      if (slides[i]) {
          slides[i].style.display = "block";
      }
  }

  // Reset dots
  for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[slideIndex].className += " active";
}

// Automatically go to the next slide every 5 seconds
setInterval(() => {
  slideIndex = (slideIndex + 1) % (document.getElementsByClassName("testimonial-block").length / 2);
  showSlides();
}, 5000);


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

document.addEventListener('DOMContentLoaded', function () {
  // Automatically open the modal when the page loads
  var contactModal = new bootstrap.Modal(document.getElementById('contactModal'));
  contactModal.show();
});

// Form submission handler for alert pop-up
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Form Submitted Successfully!');
});

// Initialize EmailJS with your public key
emailjs.init("r69Y112Ei4J6z3Ojl");

// Form submission handler for sending email via EmailJS
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting the usual way

  // Get the form data from updated IDs
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const phoneNumber = document.getElementById('phoneNumber').value;
  const organization = document.getElementById('organization').value;
  const email = document.getElementById('email').value;
  const description = document.getElementById('description').value;

  // Send the email using EmailJS
  emailjs.send("service_2z8xacf", "template_qi8jspm", {
    firstName: firstName,
    lastName: lastName,
    phoneNumber: phoneNumber,
    organization: organization,
    email: email,
    description: description
  })
  .then(function(response) {
    alert('Email successfully sent!');
  }, function(error) {
    console.log('FAILED...', error);
    alert('Failed to send email. Please try again.');
  });
});
