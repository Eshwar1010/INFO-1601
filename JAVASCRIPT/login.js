const form = document.querySelector("#sign-up-form");
const submitButton = document.querySelector("#submit");
const scriptURL = 'https://api.sheetmonkey.io/form/edqjkGvVDkvYxvUsdNceTr';

form.addEventListener('submit', e => {
  submitButton.disabled = true
  e.preventDefault()
  let requestBody = new FormData(form)
  fetch(scriptURL, { method: 'POST', body: requestBody})
    .then(response => {
       alert('Sign Up Successfull!', response);
       window.location.href = "/index.html"
       submitButton.disabled = false
      })
    .catch(error => {
    alert('Error!', error.message)
      submitButton.disabled = false

    }
    )
})





