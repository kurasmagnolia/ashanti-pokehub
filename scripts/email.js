document.addEventListener('DOMContentLoaded', function() {
  // Assuming you have a reference to your form and input
  var form = document.querySelector('form');
  var emailInput = document.querySelector('input[name="email"]');
  var hiddenInput = document.querySelector('input[name="email_hidden"]');

  form.addEventListener('submit', function(event) {
    // Set the value of the hidden input to the entered email
    hiddenInput.value = emailInput.value;
  });
});