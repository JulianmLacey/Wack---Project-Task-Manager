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
        window.location.href = '/home'
    } else {
        const json = await response.json()
        console.log(json)
    }
})