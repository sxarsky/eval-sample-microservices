// Copyright 2024 Google LLC — Apache 2.0
(function () {
  'use strict';
  document.addEventListener('DOMContentLoaded', function () {
    var container = document.querySelector('.zoom-container');
    if (!container) return;
    var img = container.querySelector('.zoom-image');
    var overlay = container.querySelector('.zoom-overlay');
    if (!img || !overlay) return;
    container.addEventListener('mouseenter', function () {
      overlay.style.backgroundImage = 'url(' + img.src + ')';
      overlay.classList.add('zoom-overlay--active');
    });
    container.addEventListener('mousemove', function (e) {
      var rect = container.getBoundingClientRect();
      var x = ((e.clientX - rect.left) / rect.width) * 100;
      var y = ((e.clientY - rect.top) / rect.height) * 100;
      overlay.style.backgroundPosition = x + '% ' + y + '%';
    });
    container.addEventListener('mouseleave', function () {
      overlay.classList.remove('zoom-overlay--active');
    });
  });
})();
