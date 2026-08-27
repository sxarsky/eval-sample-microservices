// Copyright 2024 Google LLC — Apache 2.0
(function () {
  'use strict';
  document.addEventListener('DOMContentLoaded', function () {
    var form    = document.querySelector('.cart-checkout-form');
    var preview = document.getElementById('email-preview-panel');
    if (!form || !preview) return;
    var fields = ['email','street_address','city','state','country','zip_code'];
    function update() {
      var emailVal = (form.querySelector('[name="email"]') || {}).value || '';
      var addrParts = ['street_address','city','state','zip_code','country'].map(function(n){
        return (form.querySelector('[name="' + n + '"]') || {}).value || '';
      }).filter(Boolean);
      var toEl   = preview.querySelector('.preview-to');
      var addrEl = preview.querySelector('.preview-address');
      if (toEl)   toEl.textContent   = emailVal;
      if (addrEl) addrEl.textContent = addrParts.join(', ');
    }
    fields.forEach(function (name) {
      var el = form.querySelector('[name="' + name + '"]');
      if (el) el.addEventListener('input', update);
    });
    update();
  });
})();
