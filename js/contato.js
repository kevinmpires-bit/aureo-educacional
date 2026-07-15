(function () {
    var form = document.getElementById('contato-form');
    if (!form) return;
    var successMsg = document.getElementById('form-success');

   form.addEventListener('submit', function (e) {
         e.preventDefault();
         var valid = true;

                             form.querySelectorAll('.form-error').forEach(function (el) {
                                     el.classList.remove('visible');
                             });

                             var required = form.querySelectorAll('[required]');
         required.forEach(function (field) {
                 var value = field.value.trim();
                 var errorEl = document.getElementById(field.id + '-error');
                 if (!value) {
                           valid = false;
                           if (errorEl) errorEl.classList.add('visible');
                 }
         });

                             var emailField = document.getElementById('email');
         if (emailField && emailField.value.trim()) {
                 var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                 if (!emailRegex.test(emailField.value.trim())) {
                           valid = false;
                           var emailError = document.getElementById('email-error');
                           if (emailError) {
                                       emailError.textContent = 'Insira um e-mail válido.';
                                       emailError.classList.add('visible');
                           }
                 }
         }

                             if (valid) {
                                     form.style.display = 'none';
                                     if (successMsg) successMsg.classList.add('visible');
                             }
   });
})();
