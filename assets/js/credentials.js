const scriptURL = 'https://script.google.com/macros/s/AKfycbwImGYda4hZcUm6QO8a7dmucTRitkwnj_UMormjcKcYkv8h894UbnSHWcAH0VdgZgHc/exec'


const form = document.forms['contact-form']


form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})