/* ==========================================================================
   Interactive & Redirection Script for Valencia Viudes Inmobiliaria (.com)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // -----------------------------------------------------------------------
  // 1. Mobile Navigation Toggle
  // -----------------------------------------------------------------------
  const mobileToggle = document.getElementById('mobileToggle');
  const mainNav = document.getElementById('mainNav');

  if (mobileToggle && mainNav) {
    mobileToggle.addEventListener('click', () => {
      mainNav.classList.toggle('active');
      mobileToggle.classList.toggle('active');
    });

    const navLinks = mainNav.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('active');
        mobileToggle.classList.remove('active');
      });
    });
  }

  // -----------------------------------------------------------------------
  // 2. Smooth Redirection for Human Visitors (with pause option)
  // -----------------------------------------------------------------------
  const targetUrl = 'https://www.valenciaviudes.com.ar/';
  const countdownElement = document.getElementById('redirectCountdown');
  const pauseBtn = document.getElementById('pauseRedirectBtn');
  const redirectBanner = document.getElementById('redirectBanner');

  // Detect if user agent belongs to known AI or Search Engine crawlers
  const userAgent = (navigator.userAgent || '').toLowerCase();
  const isCrawler = /bot|crawler|spider|crawling|gptbot|claudebot|perplexitybot|googlebot|bingbot|slurp|duckduckbot|baiduspider|yandexbot|facebookexternalhit/i.test(userAgent);

  let secondsLeft = 45;
  let redirectTimer = null;
  let isPaused = false;

  // Only start countdown if visitor is NOT a known bot/crawler
  if (!isCrawler && countdownElement) {
    redirectTimer = setInterval(() => {
      if (!isPaused) {
        secondsLeft -= 1;
        if (countdownElement) {
          countdownElement.textContent = secondsLeft;
        }

        if (secondsLeft <= 0) {
          clearInterval(redirectTimer);
          window.location.href = targetUrl;
        }
      }
    }, 1000);

    if (pauseBtn) {
      pauseBtn.addEventListener('click', () => {
        isPaused = !isPaused;
        if (isPaused) {
          pauseBtn.textContent = '▶️ Reanudar Redirección';
          pauseBtn.classList.add('paused');
          if (redirectBanner) {
            redirectBanner.classList.add('banner-paused');
          }
        } else {
          pauseBtn.textContent = '⏸️ Pausar Redirección';
          pauseBtn.classList.remove('paused');
          if (redirectBanner) {
            redirectBanner.classList.remove('banner-paused');
          }
        }
      });
    }
  } else if (isCrawler && redirectBanner) {
    // Hide or adjust banner for crawlers so it doesn't distract
    redirectBanner.style.opacity = '0.9';
  }

  // -----------------------------------------------------------------------
  // 3. Copy Email to Clipboard
  // -----------------------------------------------------------------------
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

  // -----------------------------------------------------------------------
  // 4. Scroll Fade-in Animations
  // -----------------------------------------------------------------------
  const observerOptions = {
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px'
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

  const animatedElements = document.querySelectorAll('.mv-card, .value-card, .privacy-box, .glass-card, .geo-card, .service-detail-card, .zone-card');
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
    observer.observe(el);
  });
});
