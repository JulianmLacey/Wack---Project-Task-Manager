document.getElementById('signout-btn').addEventListener('click', async function(event){
    const response = await fetch ('/api/users/logout', {
       method: 'POST',
       headers: {'content-type': 'application/json'} 
    });
    if (response.ok) document.location.replace('/')
})