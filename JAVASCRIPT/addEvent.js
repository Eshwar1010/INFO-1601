const form = document.querySelector("#addEvent")
const submitButton = document.querySelector("#submitEvnt")
const scriptURL = 'https://api.sheetmonkey.io/form/qmzFbivvsV4CttqsLzGo9t'

form.addEventListener('submit', e => {
    submitButton.disabled = true
    e.preventDefault()
    let requestBody = new FormData(form)
    fetch(scriptURL, { method: 'POST', body: requestBody })
        .then(response => {
            alert('Event Added!', response)
            submitButton.disabled = false
        })
        .catch(error => {
            alert('Error!', error.message)
            submitButton.disabled = false

        }
        )
})
