function setUpGoogleSheets() {
    const scriptURL = 'https://script.google.com/a/macros/dsisdconnect.com/s/AKfycbwO4bX9lo3N1049jDgqD7Lb3dj5aIf5Ivm885R1QH2fZwlAfH0NkK9JBM0Q-6WWbGTDxQ/exec'
    const form = document.querySelector('#scoutingForm')
    const btn = document.querySelector('#submit')
 
    
    form.addEventListener('submit', e => {
      e.preventDefault()
      btn.disabled = true
      btn.innerHTML = "Sending..."

      let fd = getData(false)
      for (const [key, value] of fd) {
        console.log(`${key}: ${value}\n`);
      }

      fetch(scriptURL, { method: 'POST', mode: 'no-cors', body: fd })
        .then(response => { 
              alert('Success!', response) })
        .catch(error => {
              alert('Error!', error.message)})

      btn.disabled = false
      btn.innerHTML = "Send to Google Sheets"
    })
}
