const loginForm = document.querySelector('#login-form')
const name = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')

loginForm.addEventListener('submit', async function (event) {
	event.preventDefault()

	const bodyObj = {
		name: username.value,
		email: email.value,
		password: password.value
	}

	const response = await fetch('/api/users/login', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(bodyObj)
	})

	if (response.ok) {
		window.location.href = '/'
	} else {
		const json = await response.json()
		console.log(json)
	}
})
