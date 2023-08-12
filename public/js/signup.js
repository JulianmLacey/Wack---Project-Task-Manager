const signUpForm = document.querySelector('#sign-up-form')
const username = document.getElementById('username')
const password = document.getElementById('password')


signUpForm.addEventListener('submit', async function (event) {
	event.preventDefault()

	const bodyObj = {
		name: username.value,
		email: email.value,
		password: password.value
	}

	const response = await fetch('/api/users', {
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
	}
}) 
