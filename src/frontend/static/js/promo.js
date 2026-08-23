// Copyright 2024 Google LLC — Apache 2.0
(function () {
    'use strict';
    document.addEventListener('DOMContentLoaded', function () {
        var applyBtn = document.getElementById('promo-apply-btn');
        var promoInput = document.getElementById('promo-code-input');
        var promoMessage = document.getElementById('promo-message');
        var cartTotal = document.getElementById('cart-total');

        if (!applyBtn || !promoInput) return;

        applyBtn.addEventListener('click', function () {
            var code = promoInput.value;
            fetch('/cart/promo', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: 'code=' + encodeURIComponent(code)
            }).then(function (resp) {
                if (resp.ok) {
                    return resp.json().then(function (data) {
                        if (cartTotal && data.new_total) {
                            cartTotal.textContent = data.new_total;
                        }
                    });
                }
            });
        });
    });
})();
