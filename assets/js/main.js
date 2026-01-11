(function () {
  "use strict";

  /* ===============================
     SCROLL HEADER
  =============================== */
  function toggleScrolled() {
    const body = document.body;
    const header = document.querySelector('#header') || document.querySelector('#header2');

    if (!header) return;

    if (
      !header.classList.contains('scroll-up-sticky') &&
      !header.classList.contains('sticky-top') &&
      !header.classList.contains('fixed-top')
    ) return;

    if (window.scrollY > 100) {
      body.classList.add('scrolled');
    } else {
      body.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);


  /* ===============================
     MOBILE NAV TOGGLE
  =============================== */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToggle() {
    document.body.classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }

  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener('click', mobileNavToggle);
  }


  /* ===============================
     CLOSE MOBILE NAV ON LINK CLICK
  =============================== */
  document.querySelectorAll('#navmenu a').forEach(link => {
    link.addEventListener('click', () => {
      if (document.body.classList.contains('mobile-nav-active')) {
        mobileNavToggle();
      }
    });
  });


  /* ===============================
     DROPDOWN TOGGLE
  =============================== */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(item => {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling?.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });


  /* ===============================
     PRELOADER
  =============================== */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => preloader.remove());
  }


  /* ===============================
     SCROLL TO TOP
  =============================== */
  const scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (!scrollTop) return;

    if (window.scrollY > 100) {
      scrollTop.classList.add('active');
    } else {
      scrollTop.classList.remove('active');
    }
  }

  if (scrollTop) {
    scrollTop.addEventListener('click', e => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  window.addEventListener('scroll', toggleScrollTop);
  window.addEventListener('load', toggleScrollTop);


  /* ===============================
     AOS INIT
  =============================== */
  function aosInit() {
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
    }
  }

  window.addEventListener('load', aosInit);


  /* ===============================
     GLIGHTBOX
  =============================== */
  if (typeof GLightbox !== 'undefined') {
    GLightbox({
      selector: '.glightbox'
    });
  }


  /* ===============================
     FAQ TOGGLE
  =============================== */
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle')
    .forEach(item => {
      item.addEventListener('click', () => {
        item.parentNode.classList.toggle('faq-active');
      });
    });


  /* ===============================
     SWIPER INIT (AUTO)
  =============================== */
  function initSwiper() {
    if (typeof Swiper === 'undefined') return;

    document.querySelectorAll('.init-swiper').forEach(swiperEl => {
      const configEl = swiperEl.querySelector('.swiper-config');
      if (!configEl) return;

      let config = {};
      try {
        config = JSON.parse(configEl.innerHTML.trim());
      } catch (e) {
        console.error('Swiper config JSON error:', e);
        return;
      }

      new Swiper(swiperEl, config);
    });
  }

  window.addEventListener('load', initSwiper);


  /* ===============================
     SCROLLSPY
  =============================== */
  const navLinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navLinks.forEach(link => {
      if (!link.hash) return;

      const section = document.querySelector(link.hash);
      if (!section) return;

      const position = window.scrollY + 200;

      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        document
          .querySelectorAll('.navmenu a.active')
          .forEach(el => el.classList.remove('active'));

        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', navmenuScrollspy);
  window.addEventListener('load', navmenuScrollspy);

})();
