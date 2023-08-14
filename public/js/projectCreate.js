const projectForm = document.getElementById('project-form');
const projectName = document.getElementById('project-name');
const missionStatement = document.getElementById('mission-statement');


projectForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    const obj = {
        name: projectName.value,
        missions_statement: missionStatement.value,
    }
    const response = await fetch('/api/projects', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    })


    if (response.ok) {
        Swal.fire({
            title: 'Sweet!',
            text: 'Modal with a custom image.',
            imageUrl: 'https://unsplash.it/400/200',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
          
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = '/home'
            }
        })
        
        
    } else {
        const json = await response.json()
        console.log(json)
    }
})