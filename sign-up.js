window.onload = function(event){
   console.log("Page loaded successfully.");

function infoWarning (){
  
  window.alert("Please use your personal informaton here."} //sign-up page.

function check() {
    
    function availableUsername(username) {
        let isAvailable = true;
        if (!isAvailable) {
          check = check + 1;
            console.log("Username can be used.");
        } else { 
            console.log("Username has been taken.");
        }
      
    } //checks if a username can be used or is available.
  
    function passwordCheck(password) {
        if (password.length >= 8) {
            return true;
           check = check + 1;
            console.log("Strong password.");
        } else {
            return false;
            console.log("Weak password.");
        }
    }
    
    function ZeroBounce() {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.zerobounce.net/v2/validate?api_key=YOUR_API_KEY&email=test@example.com', true);
        xhr.send();
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                // Parse the response
                let response = JSON.parse(xhr.responseText);
                if (response.status == 'valid') {
                   check = check + 1;
                    // Do something if the email is valid
                } else if (response.status == 'invalid') {
                    window.alert("Invalid email. Please enter valid email.");
                }
            }
        }
    } //for signup page, email verification
    return check;
}

if (check === 3){
  function sendtosheet () {
let url = 'https://api.sheety.co/69335d1dd8db56e81049053a1dbbcc2c/hottspotAccountInformantion/sheet1';
  let body = {
    sheet1: {
      ...
    }
  }
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(body)
  })
  .then((response) => response.json())
  .then(async (json) => {
    // Load the Sheet
    await doc.loadInfo();

// Access the first Sheet
const sheet = doc.sheetsByIndex[0];

// Getting the signup form data
const signupFormData = {
    firstName: document.getElementById('firstName').value,
    lastName: document.getElementById('lastName').value,
    email: document.getElementById('email').value,
};
  

await sheet.addRow({
    firstName: signupFormData.firstName,
    lastName: signupFormData.lastName,
    email: signupFormData.email,
});
    console.log(json.sheet1);
  });
}
