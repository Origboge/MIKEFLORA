// Shared site scripts

// Sticky navbar solid background on scroll
(function() {
  const navbar = document.querySelector('.navbar-overlay');
  const onScroll = () => {
    if (!navbar) return;
    const scrolled = window.scrollY > 10;
    navbar.classList.toggle('scrolled', scrolled);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

// Update year in footer
(function() {
  const yr = document.getElementById('year');
  if (yr) yr.textContent = new Date().getFullYear();
})();

// Admissions: open mail client with form details
(function(){
  const form = document.getElementById('admissionForm');
  if(!form) return;

  form.addEventListener('submit', function(e){
    e.preventDefault();
    // basic validation
    if(!form.checkValidity()){
      form.classList.add('was-validated');
      return;
    }
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim() || 'Admission Enquiry';
    const message = document.getElementById('message').value.trim();
    const button = form.querySelector('button[type="submit"]');
    const to = (button && button.dataset.email) ? button.dataset.email : 'info@mikefloraschools.ng';

    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    const mailto = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${body}`;
    window.location.href = mailto;
  });
})();
