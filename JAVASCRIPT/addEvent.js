const form = document.querySelector("#addEvent")
const submitButton = document.querySelector("#submitEvnt")
const scriptURL = 'https://script.google.com/macros/s/AKfycbwyc35jizGbvlsxH0PSJZTm3yJVy-JP4z62B78gAdF4xEOTEhgWyyT32my90ygmUjKT/exec'

form.addEventListener('submit', e => {
    submitButton.disabled = true
    e.preventDefault()
    let requestBody = new FormData(form)
    fetch(scriptURL, { method: 'POST', body: requestBody })
        .then(response => {
            alert('Success!', response)
            submitButton.disabled = false
        })
        .catch(error => {
            alert('Error!', error.message)
            submitButton.disabled = false

        }
        )
})
//info sends to google sheet without js but not with it