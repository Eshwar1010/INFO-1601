window.onload = function(event){
   console.log("Page loaded successfully.");

function infoWarning (){
  
  window.alert("Please use your personal informaton here."} //sign-up page.
               
               
function availableusername (username) {
    let isAvailable = true;
    if (!isAvailable){
       console.log("Username can be used.");
    }
    else{ 
      console.log("Username has been taken.");
    }
}   //checks if a username can be used or is available.
  
function passwordCheck (password) {
     if (password.length >= 8); {
     return true;
     console.log ("Strong password." )} 
     else {
     return false;
     console.log ("Weak password." )} 
     }
} 
                  
function verifylogin (email, username, password) {
    if (( email == storedEmail) || (username == storedUsername) && (password == storedPassword);{
        console.log('Login successful!');
        
         return "true"}
    else{
        window.alert ("email, username or password is incorrect. Try again.");
        return "false"
    }
  } //function for login verification
  
function ZeroBounce() {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.zerobounce.net/v2/validate?api_key=YOUR_API_KEY&email=test@example.com', true);
  xhr.send();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      // Parse the response
      let response = JSON.parse(xhr.responseText);
      if (response.status == 'valid') {
        // Do something if the email is valid
      } else if (response.status == 'invalid') {
        window.alert ("Invalid email. Please enter valid email.")
      }
    }
  }
} //for signup page, email verification

             
