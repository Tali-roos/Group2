document.addEventListener("DOMContentLoaded", function () {

  // =========================
  // CURSOR EFFECT
  // =========================
  const cursor = document.getElementById("cursor");
  const ring = document.getElementById("cursor-ring");

  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener("mousemove", e => {
    mx = e.clientX;
    my = e.clientY;

    if (cursor) {
      cursor.style.left = mx + "px";
      cursor.style.top = my + "px";
    }
  });

  function animateRing() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;

    if (ring) {
      ring.style.left = rx + "px";
      ring.style.top = ry + "px";
    }

    requestAnimationFrame(animateRing);
  }
  animateRing();

  // =========================
  // TYPING HERO
  // =========================
  const typedRole = document.getElementById("typed-role");

  const phrases = [
    "Lecturer & Innovator",
    "Mentor & Guide",
    "Problem Solver",
    "Tech Educator"
  ];

  let pi = 0, ci = 0, deleting = false;

  function typeEffect() {
    if (!typedRole) return;

    let current = phrases[pi];

    if (!deleting) {
      typedRole.textContent = current.slice(0, ++ci);

      if (ci === current.length) {
        deleting = true;
        setTimeout(typeEffect, 2000);
        return;
      }
    } else {
      typedRole.textContent = current.slice(0, --ci);

      if (ci === 0) {
        deleting = false;
        pi = (pi + 1) % phrases.length;
      }
    }

    setTimeout(typeEffect, deleting ? 50 : 100);
  }

  setTimeout(typeEffect, 800);

  // =========================
  // SCROLL REVEAL
  // =========================
  const revealElements = document.querySelectorAll(".reveal");

  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  revealElements.forEach(el => revealObserver.observe(el));

  // =========================
  // SKILL BARS
  // =========================
  const bars = document.querySelectorAll(".sp-fill");

  const barObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.width = entry.target.dataset.width + "%";
        barObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  bars.forEach(bar => barObserver.observe(bar));

  // =========================
  // QUOTE CAROUSEL
  // =========================
  const slides = document.querySelectorAll(".quote-slide");
  const dots = document.querySelectorAll(".q-dot");

  let qIndex = 0;

  function showQuote(n) {
    if (slides.length === 0) return;

    slides[qIndex].classList.remove("active");
    dots[qIndex].classList.remove("active");

    qIndex = n;

    slides[qIndex].classList.add("active");
    dots[qIndex].classList.add("active");
  }

  window.goToQuote = showQuote;

  setInterval(() => {
    if (slides.length > 0) {
      showQuote((qIndex + 1) % slides.length);
    }
  }, 5000);

  // =========================
  // HIGHLIGHT CURRENT DAY
  // =========================
  const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const today = days[new Date().getDay()];

  document.querySelectorAll(".day-row").forEach(row => {
    if (row.dataset.day === today) {
      row.classList.add("today");
    }
  });

});
