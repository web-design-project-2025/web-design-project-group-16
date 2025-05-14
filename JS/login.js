document.addEventListener('DOMContentLoaded', function () {
    // Initialize demo user credentials (only once)
    if (!localStorage.getItem('users')) {
      const demoUser = {
        username: 'demoUser',
        password: 'demoPass123'
      };
      localStorage.setItem('users', JSON.stringify([demoUser]));
    }
  
    // Login button logic
    document.querySelector('button').addEventListener('click', function () {
      const enteredUsername = document.getElementById('Username').value.trim();
      const enteredPassword = document.getElementById('Password').value.trim();
      const errorMessage = document.getElementById('error-message');
  
      const users = JSON.parse(localStorage.getItem('users')) || [];
  
      const matchedUser = users.find(user =>
        user.username === enteredUsername && user.password === enteredPassword
      );
  
      if (matchedUser) {
        errorMessage.style.display = 'none'; // Hide error if previously shown
        window.location.href = 'account.html'; // Redirect on success
      } else {
        errorMessage.textContent = 'Invalid username or password';
        errorMessage.style.display = 'block';
      }
    });
  
    // Enter key support
    document.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        document.querySelector('button').click();
      }
    });
  
    // Hide error on input
    document.getElementById('Username').addEventListener('input', () => {
      document.getElementById('error-message').style.display = 'none';
    });
    document.getElementById('Password').addEventListener('input', () => {
      document.getElementById('error-message').style.display = 'none';
    });
  });
  