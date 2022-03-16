document.getElementById('contactBtn').addEventListener('click', async function(e){
    e.preventDefault()
    var formdata = new FormData(document.querySelector('form'));
    var requestOptions = {
      method: 'POST',
      body: JSON.stringify(Object.fromEntries(formdata)),
      redirect: 'follow',
      headers: {
        'Content-Type': 'application/json'
      }
    };
  
    const request = await fetch("https://www.actionforms.io/e/r/techshelter", requestOptions)
  
    const response = await request.text()
  
    if (response){
      alert('Message envoyé avec success')
    
    }
  
  })

  