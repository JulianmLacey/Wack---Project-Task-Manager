const loginUSER = document.getElementById("Login-submit");
const getSignUpPage = document.getElementById("GetSignUpPage");

const loginEventHandler = async (event) => {
	event.preventDefault();

	const email = document.querySelector("#login-Username");
	const password = document.querySelector("#login-Password");

	if (email && password) {
		// Send a POST request to the API endpoint
		const response = await fetch("/login", {
			method: "POST",
			body: JSON.stringify({ email, password }),
			headers: { "Content-Type": "application/json" },
		});

		if (response.ok) {
			// If successful, redirect the browser to the profile page
			//document.location.replace('/profile');
			console.log(response);
			console.log("Login Successful");
		} else {
			alert(response.statusText);
		}
	}
};

const getSignUpPageHandler = async (event) => {
	event.preventDefault();
	console.log("Get SignUp Page");
	document.location.replace("/");
};

document.getElementById("Login-submit").addEventListener("click", getSignUpPageHandler);
document.getElementById("GetSignUpPage").addEventListener("submit", loginEventHandler);
