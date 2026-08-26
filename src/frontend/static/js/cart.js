// Copyright 2024 Google LLC — Apache 2.0
(function () {
  'use strict';
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.qty-control').forEach(function (control) {
      var input = control.querySelector('.qty-input');
      var dec = control.querySelector('.qty-dec');
      var inc = control.querySelector('.qty-inc');
      if (!input || !dec || !inc) return;
      dec.addEventListener('click', function () {
        var v = parseInt(input.value, 10);
        if (v > 1) { input.value = v - 1; updateLineTotal(control, v - 1); }
      });
      inc.addEventListener('click', function () {
        var v = parseInt(input.value, 10);
        if (v < 10) { input.value = v + 1; updateLineTotal(control, v + 1); }
      });
      input.addEventListener('change', function () {
        var v = parseInt(input.value, 10);
        if (!isNaN(v) && v >= 1 && v <= 10) updateLineTotal(control, v);
      });
    });
  });
  function updateLineTotal(control, qty) {
    var lineCents = parseInt(control.dataset.lineCents || '0', 10);
    var initQty  = parseInt(control.dataset.initQty  || '1', 10);
    var unitCents = initQty > 0 ? Math.round(lineCents / initQty) : 0;
    var row = control.closest('.row');
    var lineEl = row ? row.querySelector('.line-total') : null;
    if (lineEl && unitCents) {
      var total = (unitCents * qty / 100).toFixed(2);
      lineEl.textContent = control.dataset.currency + ' ' + total;
    }
  }
})();
