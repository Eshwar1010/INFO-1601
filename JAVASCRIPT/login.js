let url = 'https://api.sheety.co/69335d1dd8db56e81049053a1dbbcc2c/hottspotAccountInformantion/sheet1';
fetch(url)
.then((response) => response.json())
.then(data => {
  // Do something with the data
 let username = data.username;
 let email = data.email;
 let password = data.password; 
 
 login(username, password);
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
