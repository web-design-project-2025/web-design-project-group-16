document.addEventListener('DOMContentLoaded', function () {
  const demoUsername = 'demoUser';
  const demoPassword = 'demoPass123';

  const loginButton = document.querySelector('button');
  const usernameInput = document.getElementById('Username');
  const passwordInput = document.getElementById('Password');
  const errorMessageDiv = document.querySelector('.error-message'); // <-- updated to use class

  loginButton.addEventListener('click', function () {
    const enteredUsername = usernameInput.value.trim();
    const enteredPassword = passwordInput.value.trim();

    if (enteredUsername === demoUsername && enteredPassword === demoPassword) {
      errorMessageDiv.style.display = 'none';
      window.location.href = 'account.html';
    } else {
      errorMessageDiv.textContent = 'Invalid username or password';
      errorMessageDiv.style.display = 'block';
    }
  });

  // Enter key support
  document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      loginButton.click();
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
