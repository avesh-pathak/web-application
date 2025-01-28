
const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const genderInputs = document.querySelectorAll('input[name="gender"]');
const dobInput = document.getElementById('dob');
const phoneInput = document.getElementById('phone');
const languageInputs = document.querySelectorAll('input[name="language"]');
const addressInput = document.getElementById('address');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  
  let name = nameInput.value;

  
  if (name) {
    name = name.charAt(0).toUpperCase() + name.slice(1);
    nameInput.value = name; // Update the input field with the capitalized name
  }


  if (!name || !name.match(/^[A-Z][a-z]+$/)) {
    alert('Please enter a valid name (first letter capitalized)');
    return;
  }


  const email = emailInput.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    alert('Please enter a valid email address');
    return;
  }

  
  const password = passwordInput.value;
  if (password.length < 6) {
    alert('Password must be at least 6 characters long');
    return;
  }

  
  const confirmPassword = confirmPasswordInput.value;
  if (password !== confirmPassword) {
    alert('Passwords do not match');
    return;
  }

  
  let selectedGender = '';
  genderInputs.forEach((input) => {
    if (input.checked) {
      selectedGender = input.value;
    }
  });
  if (!selectedGender) {
    alert('Please select a gender');
    return;
  }

  
  const phone = phoneInput.value;
  const phoneRegex = /^\d{10}$/; 
  if (!phone || !phoneRegex.test(phone)) {
    alert('Please enter a valid 10-digit phowfpphfne number');
    return;
  }

  
  const address = addressInput.value;
  if (!address) {
    alert('Please enter an address');
    return;
  }

  
  form.submit();
});



