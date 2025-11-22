document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form Submitted Successfully!');
});

(function() {
    // Initialize EmailJS with your public key
    emailjs.init("r69Y112Ei4J6z3Ojl");
  })();

      // Form submission handler
      document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting the usual way
  
        // Get the form data
        const fasname = document.getElementById('firstName').value;
        const lasname = document.getElementById('lastName').value;
        const numbers = document.getElementById('phoneNumber').value;
        const orgni = document.getElementById('organization').value;
        const email = document.getElementById('email').value;
        const descrips = document.getElementById('Description').value;
  
        // Send the email using EmailJS
        emailjs.send("service_2z8xacf", "template_qi8jspm", {
          fasname: fasname,
          lasname: lasname,
          numbers: numbers,
          orgni: orgni,
          email: email,
          descrips: descrips

        })
        .then(function(response) {
          alert('Email successfully sent!');
        }, function(error) {
          console.log('FAILED...', error); // Detailed error in the browser's console
          alert('Failed to send email. Please try again.');
        });
      });


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