document.addEventListener('DOMContentLoaded', function() {
  // Get form and all input elements
  const form = document.getElementById('registration-form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const confirmPasswordInput = document.getElementById('confirm-password');
  const phoneInput = document.getElementById('phone');
  const dobInput = document.getElementById('dob');
  const addressInput = document.getElementById('address');
  const genderInputs = document.querySelectorAll('input[name="gender"]');
  const submitButton = document.getElementById('submit-btn');
  
  // Error message elements
  const nameError = document.getElementById('name-error');
  const emailError = document.getElementById('email-error');
  const passwordError = document.getElementById('password-error');
  const confirmPasswordError = document.getElementById('confirm-password-error');
  const phoneError = document.getElementById('phone-error');
  const dobError = document.getElementById('dob-error');
  const addressError = document.getElementById('address-error');
  const genderError = document.getElementById('gender-error');
  
  // Validation patterns
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^\+?[0-9]{10,15}$/;
  
  // Helper function to show error
  function showError(inputElement, errorElement, message) {
    errorElement.textContent = message;
    inputElement.style.borderColor = '#e74c3c';
  }
  
  // Helper function to clear error
  function clearError(inputElement, errorElement) {
    errorElement.textContent = '';
    inputElement.style.borderColor = '';
  }
  
  // Add input event listeners for real-time validation
  nameInput.addEventListener('input', function() {
    if (nameInput.value.trim() === '') {
      showError(nameInput, nameError, 'Name is required');
    } else if (nameInput.value.trim().length < 2) {
      showError(nameInput, nameError, 'Name must be at least 2 characters');
    } else {
      clearError(nameInput, nameError);
    }
  });
  
  emailInput.addEventListener('input', function() {
    if (emailInput.value.trim() === '') {
      showError(emailInput, emailError, 'Email is required');
    } else if (!emailPattern.test(emailInput.value)) {
      showError(emailInput, emailError, 'Please enter a valid email address');
    } else {
      clearError(emailInput, emailError);
    }
  });
  
  passwordInput.addEventListener('input', function() {
    if (passwordInput.value === '') {
      showError(passwordInput, passwordError, 'Password is required');
    } else if (passwordInput.value.length < 8) {
      showError(passwordInput, passwordError, 'Password must be at least 8 characters');
    } else {
      clearError(passwordInput, passwordError);
    }
    
    // Also check confirm password match if it has a value
    if (confirmPasswordInput.value !== '') {
      if (confirmPasswordInput.value !== passwordInput.value) {
        showError(confirmPasswordInput, confirmPasswordError, 'Passwords do not match');
      } else {
        clearError(confirmPasswordInput, confirmPasswordError);
      }
    }
  });
  
  confirmPasswordInput.addEventListener('input', function() {
    if (confirmPasswordInput.value === '') {
      showError(confirmPasswordInput, confirmPasswordError, 'Please confirm your password');
    } else if (confirmPasswordInput.value !== passwordInput.value) {
      showError(confirmPasswordInput, confirmPasswordError, 'Passwords do not match');
    } else {
      clearError(confirmPasswordInput, confirmPasswordError);
    }
  });
  
  phoneInput.addEventListener('input', function() {
    if (phoneInput.value.trim() === '') {
      showError(phoneInput, phoneError, 'Phone number is required');
    } else if (!phonePattern.test(phoneInput.value.replace(/\s/g, ''))) {
      showError(phoneInput, phoneError, 'Please enter a valid phone number');
    } else {
      clearError(phoneInput, phoneError);
    }
  });
  
  dobInput.addEventListener('change', function() {
    if (dobInput.value === '') {
      showError(dobInput, dobError, 'Date of birth is required');
    } else {
      const selectedDate = new Date(dobInput.value);
      const today = new Date();
      const minAgeDate = new Date();
      minAgeDate.setFullYear(today.getFullYear() - 13); // Example: minimum age is 13
      
      if (selectedDate > today) {
        showError(dobInput, dobError, 'Date cannot be in the future');
      } else if (selectedDate > minAgeDate) {
        showError(dobInput, dobError, 'You must be at least 13 years old');
      } else {
        clearError(dobInput, dobError);
      }
    }
  });
  
  addressInput.addEventListener('input', function() {
    if (addressInput.value.trim() === '') {
      showError(addressInput, addressError, 'Address is required');
    } else if (addressInput.value.trim().length < 10) {
      showError(addressInput, addressError, 'Please enter a complete address');
    } else {
      clearError(addressInput, addressError);
    }
  });
  
  // Form submission
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;
    
    // Validate name
    if (nameInput.value.trim() === '') {
      showError(nameInput, nameError, 'Name is required');
      isValid = false;
    }
    
    // Validate email
    if (emailInput.value.trim() === '') {
      showError(emailInput, emailError, 'Email is required');
      isValid = false;
    } else if (!emailPattern.test(emailInput.value)) {
      showError(emailInput, emailError, 'Please enter a valid email address');
      isValid = false;
    }
    
    // Validate password
    if (passwordInput.value === '') {
      showError(passwordInput, passwordError, 'Password is required');
      isValid = false;
    } else if (passwordInput.value.length < 8) {
      showError(passwordInput, passwordError, 'Password must be at least 8 characters');
      isValid = false;
    }
    
    // Validate confirm password
    if (confirmPasswordInput.value === '') {
      showError(confirmPasswordInput, confirmPasswordError, 'Please confirm your password');
      isValid = false;
    } else if (confirmPasswordInput.value !== passwordInput.value) {
      showError(confirmPasswordInput, confirmPasswordError, 'Passwords do not match');
      isValid = false;
    }
    
    // Validate gender
    let genderSelected = false;
    genderInputs.forEach(input => {
      if (input.checked) {
        genderSelected = true;
      }
    });
    
    if (!genderSelected) {
      genderError.textContent = 'Please select your gender';
      isValid = false;
    } else {
      genderError.textContent = '';
    }
    
    // Validate date of birth
    if (dobInput.value === '') {
      showError(dobInput, dobError, 'Date of birth is required');
      isValid = false;
    }
    
    // Validate phone
    if (phoneInput.value.trim() === '') {
      showError(phoneInput, phoneError, 'Phone number is required');
      isValid = false;
    } else if (!phonePattern.test(phoneInput.value.replace(/\s/g, ''))) {
      showError(phoneInput, phoneError, 'Please enter a valid phone number');
      isValid = false;
    }
    
    // Validate address
    if (addressInput.value.trim() === '') {
      showError(addressInput, addressError, 'Address is required');
      isValid = false;
    }
    
    // Submit if valid
    if (isValid) {
      // You can either submit the form or handle the data via AJAX
      console.log('Form validation passed, submitting form...');
      
      // Animate the submit button to indicate submission
      submitButton.textContent = 'Submitting...';
      submitButton.disabled = true;
      
      // Simulate server response (remove in production)
      setTimeout(() => {
        form.submit();
      }, 1000);
    }
  });
});