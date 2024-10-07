// Contact Form Submission
function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Check if all fields are filled
    if (name && email && message) {
      // Simulate form submission success
      alert('Thank you, ' + name + '! Your message has been sent successfully.');
      
      // Optionally, you can reset the form after submission
      document.getElementById('contactForm').reset();
    } else {
      alert('Please fill out all fields before submitting.');
    }
  }
  
  // Smooth Scroll for Navigation Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      // Scroll smoothly to the target section
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  