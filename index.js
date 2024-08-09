// Menu Toggle Function for Smaller Screens
function toggleMenu() {
  const nav = document.querySelector('nav ul');
  nav.classList.toggle('active');
}

// Smooth Scrolling for In-Page Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      window.scrollTo({
          top: targetElement.offsetTop - 60, // Adjust the offset as needed
          behavior: 'smooth'
      });

      // Close the menu after clicking a link (for mobile view)
      if (window.innerWidth <= 768) {
          toggleMenu();
      }
  });
});

// Optional: Form Validation for Contact Form in Footer
function validateForm() {
  const name = document.querySelector('#name').value.trim();
  const email = document.querySelector('#email').value.trim();
  const message = document.querySelector('#message').value.trim();

  if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields.");
      return false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return false;
  }

  return true;
}

// Attach form validation to form submit event (if you have a contact form)
document.querySelector('form').addEventListener('submit', function(e) {
  if (!validateForm()) {
      e.preventDefault(); // Prevent form submission if validation fails
    }
});