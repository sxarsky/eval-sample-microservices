// Copyright 2024 Google LLC — Apache 2.0
(function () {
  'use strict';
  function updateBadge(badge, count) {
    if (count > 0) {
      badge.textContent = String(count);
      badge.removeAttribute('hidden');
    } else {
      badge.setAttribute('hidden', '');
    }
  }
  document.addEventListener('DOMContentLoaded', function () {
    var badge = document.getElementById('cart-count-badge');
    if (!badge) return;
    document.addEventListener('cart:updated', function (e) {
      if (e.detail && typeof e.detail.count === 'number') updateBadge(badge, e.detail.count);
    });
  });
  window.CartBadge = { update: function (count) {
    var b = document.getElementById('cart-count-badge');
    if (b) updateBadge(b, count);
  }};
})();
