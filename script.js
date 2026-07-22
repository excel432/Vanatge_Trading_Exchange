<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sign Up - Vantage Trading Exchange</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background: #0a0a0a; color: white; font-family: Arial, sans-serif;
      display: flex; justify-content: center; align-items: center; min-height: 100vh;
    }
    .login-box {
      background: #161616; border: 1px solid #2a2a2a; padding: 40px;
      width: 100%; max-width: 400px; border-radius: 4px;
    }
    .login-box h2 { color: #c9a84c; font-size: 1.8rem; margin-bottom: 8px; }
    .login-box p { color: #888; margin-bottom: 30px; font-size: 0.9rem; }
    .form-group { margin-bottom: 20px; position: relative; }
    label {
      display: block; font-size: 0.8rem; color: #888;
      margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.1em;
    }
    input {
      width: 100%; background: #111; border: 1px solid #2a2a2a;
      color: white; padding: 12px; border-radius: 3px; font-size: 0.95rem;
    }
    input:focus { outline: none; border-color: #c9a84c; }
    .toggle-eye {
      position: absolute; right: 12px; top: 38px;
      cursor: pointer; color: #888; font-size: 0.85rem; user-select: none;
    }
    button {
      width: 100%; background: #c9a84c; color: black; padding: 12px;
      border: none; border-radius: 3px; font-weight: bold;
      font-size: 1rem; cursor: pointer; margin-top: 10px;
    }
    button:hover { background: #e2c87a; }
    .error { color: #e05252; font-size: 0.85rem; margin-top: 10px; display: none; }
    .success { color: #4caf50; font-size: 0.85rem; margin-top: 10px; display: none; }
    .logo { color: #c9a84c; font-size: 1.4rem; font-weight: bold; margin-bottom: 30px; display: block; }
    .switch-link { margin-top: 20px; font-size: 0.85rem; color: #888; text-align: center; }
    .switch-link a { color: #c9a84c; text-decoration: none; }
  </style>
</head>
<body>
  <div class="login-box">
    <span class="logo">Vantage Trading Exchange</span>
    <h2>Create Account</h2>
    <p>Sign up to access your portfolio</p>

    <div class="form-group">
      <label>Email Address</label>
      <input type="email" id="email" placeholder="Enter your email">
    </div>

    <div class="form-group">
      <label>Password</label>
      <input type="password" id="password" placeholder="Create a password">
      <span class="toggle-eye" onclick="togglePassword('password', this)">Show</span>
    </div>

    <button onclick="signUpUser()">Sign Up</button>
    <p class="error" id="errorMsg">Something went wrong. Try again.</p>
    <p class="success" id="successMsg">Account created! Redirecting...</p>

    <p class="switch-link">Already have an account? <a href="login.html">Sign In</a></p>
  </div>

  <script type="module">
    import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
    import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";

    const firebaseConfig = {
      apiKey: "AIzaSyCcCUNo_Fe6nYRkQCCfcYzPbF4_8YJQOfg",
      authDomain: "vantage-trading-exchange.firebaseapp.com",
      projectId: "vantage-trading-exchange",
      storageBucket: "vantage-trading-exchange.firebasestorage.app",
      messagingSenderId: "379005808101",
      appId: "1:379005808101:web:b6a994e0d4630ade8d130c",
      measurementId: "G-5J31HW30GT"
    };

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    window.signUpUser = function () {
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const errorMsg = document.getElementById("errorMsg");
      const successMsg = document.getElementById("successMsg");

      errorMsg.style.display = "none";
      successMsg.style.display = "none";

      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          successMsg.style.display = "block";
          setTimeout(() => {
            window.location.href = "dashboard.html";
          }, 1500);
        })
        .catch((error) => {
          errorMsg.textContent = error.message;
          errorMsg.style.display = "block";
        });
    };

    window.togglePassword = function (fieldId, el) {
      const field = document.getElementById(fieldId);
      if (field.type === "password") {
        field.type = "text";
        el.textContent = "Hide";
      } else {
        field.type = "password";
        el.textContent = "Show";
      }
    };
  </script>
</body>
</html>



