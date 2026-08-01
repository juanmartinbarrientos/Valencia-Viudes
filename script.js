/* ==========================================================================
   Interactive Script for Inmobiliaria Valencia Viudes Haedo
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const mainNav = document.getElementById('mainNav');

  if (mobileToggle && mainNav) {
    mobileToggle.addEventListener('click', () => {
      mainNav.classList.toggle('active');
      mobileToggle.classList.toggle('active');
    });

    // Close mobile nav when clicking a link
    const navLinks = mainNav.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('active');
        mobileToggle.classList.remove('active');
      });
    });
  }

  // Copy Email to Clipboard Feature
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  const copyEmailText = document.getElementById('copyEmailText');
  const targetEmail = 'info@valenciaviudes.com.ar';

  if (copyEmailBtn && copyEmailText) {
    copyEmailBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(targetEmail);
        const originalText = copyEmailText.textContent;
        copyEmailText.textContent = '¡Correo Copiado!';
        copyEmailBtn.style.color = '#10b981';

        setTimeout(() => {
          copyEmailText.textContent = originalText;
          copyEmailBtn.style.color = '';
        }, 3000);
      } catch (err) {
        // Fallback if clipboard API fails
        const textArea = document.createElement('textarea');
        textArea.value = targetEmail;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);

        copyEmailText.textContent = '¡Correo Copiado!';
        setTimeout(() => {
          copyEmailText.textContent = 'Copiar Correo';
        }, 3000);
      }
    });
  }

  // Intersection Observer for subtle fade-in animations on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const animatedElements = document.querySelectorAll('.mv-card, .value-card, .privacy-box, .glass-card');
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
  });
});
