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
