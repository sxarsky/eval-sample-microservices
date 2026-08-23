// Copyright 2024 Google LLC — Apache 2.0
(function () {
  'use strict';
  document.addEventListener('DOMContentLoaded', function () {
    var emptyBtn   = document.getElementById('empty-cart-btn');
    var dialog     = document.getElementById('empty-cart-dialog');
    var confirmBtn = document.getElementById('empty-cart-confirm');
    var cancelBtn  = document.getElementById('empty-cart-cancel');
    var emptyForm  = document.getElementById('empty-cart-form');
    if (!emptyBtn || !dialog) return;

    function openDialog() {
      dialog.removeAttribute('hidden');
      var firstFocusable = dialog.querySelector('button, [href], input, [tabindex]:not([tabindex="-1"])');
      if (firstFocusable) firstFocusable.focus();
    }

    function closeDialog() {
      dialog.setAttribute('hidden', '');
      emptyBtn.focus();
    }

    emptyBtn.addEventListener('click', function (e) {
      e.preventDefault();
      openDialog();
    });
    if (cancelBtn) {
      cancelBtn.addEventListener('click', closeDialog);
    }
    if (confirmBtn && emptyForm) {
      confirmBtn.addEventListener('click', function () { emptyForm.submit(); });
    }
    dialog.addEventListener('click', function (e) {
      if (e.target === dialog) closeDialog();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !dialog.hasAttribute('hidden')) closeDialog();
    });
  });
})();
