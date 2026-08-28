// Copyright 2024 Google LLC — Apache 2.0
(function () {
  'use strict';
  document.addEventListener('DOMContentLoaded', function () {
    var carousel = document.querySelector('.featured-carousel');
    if (!carousel) return;
    var slides = carousel.querySelectorAll('.carousel-slide');
    var dots   = carousel.querySelectorAll('.carousel-dot');
    var prev   = carousel.querySelector('.carousel-prev');
    var next   = carousel.querySelector('.carousel-next');
    if (!slides.length) return;
    var current = 0;
    function goTo(idx) {
      slides[current].classList.remove('carousel-slide--active');
      if (dots[current]) dots[current].classList.remove('carousel-dot--active');
      current = (idx + slides.length) % slides.length;
      slides[current].classList.add('carousel-slide--active');
      if (dots[current]) dots[current].classList.add('carousel-dot--active');
    }
    var timer = setInterval(function () { goTo(current + 1); }, 5000);
    function reset() { clearInterval(timer); timer = setInterval(function () { goTo(current + 1); }, 5000); }
    if (prev) prev.addEventListener('click', function () { goTo(current - 1); reset(); });
    if (next) next.addEventListener('click', function () { goTo(current + 1); reset(); });
    dots.forEach(function (d, i) { d.addEventListener('click', function () { goTo(i); reset(); }); });
    slides[0].classList.add('carousel-slide--active');
    if (dots[0]) dots[0].classList.add('carousel-dot--active');
  });
})();
