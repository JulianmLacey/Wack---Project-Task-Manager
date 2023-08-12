document.addEventListener('DOMContentLoaded', async function () {
    try {
        const response = await fetch('/api/projects');
        const project = await response.json();

        const projectsContainer = document.querySelector('.projects-container');
        projectsContainer.innerHTML = '';

        projects.forEach(project => {
            const projectDiv = document.createElement('div');
            projectDiv.classList.add('project');
            projectDiv.innerHTML = `
            <h3>${project.name}</h3>
            <p>${project.missions_statement}</p>
            <p> Manager: ${project.user.name}</p>
            `;
            projectsContainer.appendChild(projectDiv);
        });

    } catch (error) {
        console.error('Error fetching projects', error);

    }

});