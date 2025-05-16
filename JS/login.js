 // Chat GPT, function breankdown https://chatgpt.com/share/68270fa1-eb08-8002-9000-d9ada2b337c4
 const loginButton = document.getElementById('loginButton');
// End of chat gpt help

document.addEventListener('DOMContentLoaded', function () {

  // Correct username and password
  const demoUsername = 'demoUser';
  const demoPassword = 'demoPass123';

  const loginButton = document.querySelector('button');
  const usernameInput = document.getElementById('Username');
  const passwordInput = document.getElementById('Password');
  const errorMessageDiv = document.querySelector('.error-message'); 

  document.querySelector('#loginButton').addEventListener('click', function () {
    const enteredUsername = usernameInput.value.trim();
    const enteredPassword = passwordInput.value.trim();
    // Login if the password and username is correct, otherwise sipay error message.
    if (enteredUsername === demoUsername && enteredPassword === demoPassword) {
      errorMessageDiv.style.display = 'none';
      window.location.href = 'account.html';
    } else {
      errorMessageDiv.textContent = 'Invalid username or password';
      errorMessageDiv.style.display = 'block';
    }
  });
  
  // Clear error message when typing
  usernameInput.addEventListener('input', () => {
    errorMessageDiv.style.display = 'none';
  });

  passwordInput.addEventListener('input', () => {
    errorMessageDiv.style.display = 'none';
  });
});
   