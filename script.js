/**
 * ==========================================================================
 * PORTFOLIO JAVASCRIPT LOGIC
 * Gunjan Vishwakarma — Software Developer Portfolio
 * Dynamic Typewriter, Theme Toggle, Smooth Scroll, Filters, Form Validation
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {

  /* -----------------------------
     1. Theme Switcher (Light / Dark)
     ----------------------------- */
  const themeToggleBtn = document.getElementById('theme-toggle');
  const body = document.body;

  // Check saved preference (default to dark)
  const savedTheme = localStorage.getItem('portfolio-theme');

  if (savedTheme) {
    body.setAttribute('data-theme', savedTheme);
  } else {
    body.setAttribute('data-theme', 'dark');
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = body.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      body.setAttribute('data-theme', newTheme);
      localStorage.setItem('portfolio-theme', newTheme);
      showToast(`Switched to ${newTheme} mode`);
    });
  }

  /* -----------------------------
     2. Dynamic Typewriter Effect
     ----------------------------- */
  const typewriterElement = document.getElementById('typewriter');
  const phrases = [
    'React.js & Next.js Web Apps',
    'Responsive Production Interfaces',
    'Fintech & Stock Market Platforms',
    'REST API & JWT Integrations',
    'Clean, Component-Based UI'
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 85;
  const deletingSpeed = 40;
  const pauseEnd = 1500;

  function typeEffect() {
    if (!typewriterElement) return;

    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      typewriterElement.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typewriterElement.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
    }

    let delta = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && charIndex === currentPhrase.length) {
      delta = pauseEnd;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      delta = 350;
    }

    setTimeout(typeEffect, delta);
  }

  typeEffect();

  /* -----------------------------
     3. Header Scrolled State & Active Link
     ----------------------------- */
  const header = document.getElementById('header');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    // Header shadow & blur on scroll
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Highlight active section link
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });

  /* -----------------------------
     4. Mobile Hamburger Drawer
     ----------------------------- */
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.contains('open');
      if (isOpen) {
        mobileDrawer.classList.remove('open');
        mobileToggle.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
      } else {
        mobileDrawer.classList.add('open');
        mobileToggle.classList.add('active');
        mobileToggle.setAttribute('aria-expanded', 'true');
      }
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        mobileToggle.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* -----------------------------
     5. Animated Number Counters (About Section)
     ----------------------------- */
  const statNumbers = document.querySelectorAll('.stat-number');
  let animatedStats = false;

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animatedStats) {
        animatedStats = true;
        statNumbers.forEach(stat => {
          const target = +stat.getAttribute('data-target');
          let count = 0;
          const duration = 1200;
          const increment = Math.max(1, Math.ceil(target / (duration / 25)));

          const updateCounter = () => {
            count += increment;
            if (count >= target) {
              stat.textContent = target;
            } else {
              stat.textContent = count;
              setTimeout(updateCounter, 25);
            }
          };

          updateCounter();
        });
      }
    });
  }, { threshold: 0.3 });

  const aboutSection = document.getElementById('about');
  if (aboutSection) {
    statsObserver.observe(aboutSection);
  }

  /* -----------------------------
     6. Animated Skill Progress Bars
     ----------------------------- */
  const progressFills = document.querySelectorAll('.progress-bar-fill');
  const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        progressFills.forEach(fill => {
          fill.classList.add('animated');
        });
      }
    });
  }, { threshold: 0.25 });

  const skillsSection = document.getElementById('skills');
  if (skillsSection) {
    skillsObserver.observe(skillsSection);
  }

  /* -----------------------------
     7. Projects Category Filter
     ----------------------------- */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');

        if (filterValue === 'all' || cardCategory === filterValue) {
          card.classList.remove('hide');
          card.style.animation = 'fadeIn 0.4s ease forwards';
        } else {
          card.classList.add('hide');
        }
      });
    });
  });

  /* -----------------------------
     8. 1-Click Copy Email to Clipboard
     ----------------------------- */
  const copyEmailBtn = document.getElementById('copy-email-btn');
  const emailAddressText = document.getElementById('email-address-text');

  if (copyEmailBtn && emailAddressText) {
    copyEmailBtn.addEventListener('click', () => {
      const email = emailAddressText.textContent.trim();
      navigator.clipboard.writeText(email).then(() => {
        showToast('Email address copied to clipboard!');
      }).catch(() => {
        showToast('Failed to copy. Please copy manually.');
      });
    });
  }

  /* -----------------------------
     9. Contact Form Validation & Submission
     ----------------------------- */
  const contactForm = document.getElementById('contact-form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const submitBtn = document.getElementById('submit-btn');
  const successBanner = document.getElementById('form-success-banner');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;

      // Validate Name
      if (!nameInput.value.trim()) {
        nameInput.closest('.form-group').classList.add('has-error');
        isValid = false;
      } else {
        nameInput.closest('.form-group').classList.remove('has-error');
      }

      // Validate Email
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(emailInput.value.trim())) {
        emailInput.closest('.form-group').classList.add('has-error');
        isValid = false;
      } else {
        emailInput.closest('.form-group').classList.remove('has-error');
      }

      // Validate Message
      if (!messageInput.value.trim()) {
        messageInput.closest('.form-group').classList.add('has-error');
        isValid = false;
      } else {
        messageInput.closest('.form-group').classList.remove('has-error');
      }

      if (isValid) {
        const originalBtnText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending message...';

        // Simulate network submission
        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnText;
          contactForm.reset();

          if (successBanner) {
            successBanner.classList.add('show');
            setTimeout(() => {
              successBanner.classList.remove('show');
            }, 6000);
          }

          showToast('Message sent successfully!');
        }, 1100);
      }
    });

    // Realtime error clearing
    [nameInput, emailInput, messageInput].forEach(input => {
      if (input) {
        input.addEventListener('input', () => {
          input.closest('.form-group').classList.remove('has-error');
        });
      }
    });
  }

  /* -----------------------------
     10. Toast Notification Helper
     ----------------------------- */
  const toast = document.getElementById('toast-notification');
  const toastMessage = document.getElementById('toast-message');
  let toastTimer;

  function showToast(message) {
    if (!toast || !toastMessage) return;

    clearTimeout(toastTimer);
    toastMessage.textContent = message;
    toast.classList.add('show');

    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }

  /* -----------------------------
     11. Dynamic Copyright Year
     ----------------------------- */
  const currentYearSpan = document.getElementById('current-year');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  /* -----------------------------
     12. Smooth Reveal on Scroll
     ----------------------------- */
  const revealElements = document.querySelectorAll(
    '.about-story-card, .stat-card, .skill-category-card, .timeline-card, .project-card, .edu-card, .contact-info-card, .contact-form-card'
  );

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => {
    el.classList.add('reveal-on-scroll');
    revealObserver.observe(el);
  });

});
