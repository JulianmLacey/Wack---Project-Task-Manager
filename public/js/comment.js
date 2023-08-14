const taskForm = document.getElementById("task-form");
const taskButton = document.getElementById("task-btn");
const commentForm = document.getElementById("comment-form");
const commentBtn = document.getElementById("comment-btn");
const taskName = document.getElementById("task-name");
const taskDescription= document.getElementById("task-description")

taskForm.addEventListener('submit', async function(e) {
 e.preventDefault();
 const obj = {
    taskName: taskName.value,
    description: taskDescription.value,
    date_created: '2023-08-13',
    status: 1,
    priority: 2,
    timeline: 0.944868217283818,
    user_id: 12,
    project_id: 3
 }
 const response = await fetch('/api/tasks', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(obj)
 })
 console.log(obj)
    if (response.ok) {
        window.location.reload()
        console.log(response)
    } else {
        const json = await response.json()
        
        console.log(json)
    }
})