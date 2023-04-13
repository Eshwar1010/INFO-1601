let url = 'https://api.sheety.co/69335d1dd8db56e81049053a1dbbcc2c/hottspotAccountInformantion/sheet1';
fetch(url)
.then((response) => response.json())
.then(data => {
  // Do something with the data
 let username = data.username;
 let email = data.email;
 let password = data.password; 
 
 <!-- login(username, password);
  })
  .catch(err => {
  
  console.log(err);
  });
  
  function login(username, email, password, ) {
    if (( email == storedEmail) || (username == storedUsername) && (password == storedPassword);{
        console.log('Login successful!');
        
         return "true"}
    else{
        window.alert ("email, username or password is incorrect. Try again.");
        return "false"
    }
  }
  console.log(json.sheet1S);
});
 -->

//Here
let email;
let username;
let password;
let apiUrl = 'https://api.sheety.co/8f8d5d5e-c6f3-4b76-a9e4-f4f4b4c7d88d';

// Check valid
function checkValidity() {
  // Check if email is valid
  if (validateEmail(email)) {
    // Check if username is taken
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        // Check if username is taken
        if (data.find(y => y.username === username)) {
          alert('Username is already taken!');
        } else if (checkPasswordStrength(password) < 5) {
          // Check if password is weak
          alert('Password is too weak!');
        } else {
          // Send data to Google Sheets using Sheety API
          const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, username, password })
          };
          fetch(apiUrl, requestOptions)
            .then(response => response.json())
            .then(data => {
              alert('Sign up successful!');
            });
        }
      });
  } else {
    alert('Email is not valid!');
  }
}

// Validate email
function validateEmail(email) {
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// Check password strength
function checkPasswordStrength(password) {
  let strength = 0;
  if (password.length < 6) return strength;
  if (password.match(/[a-z]+/)) strength++;
  if (password.match(/[A-Z]+/)) strength++;
  if (password.match(/[0-9]+/)) strength++;
  if (password.match(/[$@#&!]+/)) strength++;
  return strength;
}

// Handle Login
function LoginForm() {
  email = document.getElementById('email').value;
  username = document.getElementById('username').value;
  password = document.getElementById('password').value;
  checkValidity();
}
