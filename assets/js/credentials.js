const scriptURL = 'https://script.google.com/macros/s/AKfycbwHE7f93fozVGrhEjUk_aTyFJUyztLca7EtGe8imQ_MEwxPf9PFj3eNqciC10Ob0JTR/exec'


const form = document.forms['contact-form']


form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
