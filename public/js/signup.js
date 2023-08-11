const signupUSER = document.getElementById("SignUp-submit");
const getLoginPage = document.getElementById("GetLoginPage");

const signUpEventHandler = async (event) => {
	event.preventDefault();

	const Iname = document.querySelector("#signup-Username").value.trim();
	const Iemail = document.querySelector("#signup-Email").value.trim();
	const Ipassword = document.querySelector("#signup-Password").value.trim();
	const Iorganization = document.querySelector("#signup-orgID").value.trim();

	console.log(Iname);
	console.log(Iemail);
	console.log(Ipassword);
	console.log(Iorganization);

	if (Iemail && Ipassword && Iname && Iorganization) {
		// Send a POST request to the API endpoint
		const response = await fetch("/USERsignup", {
			method: "POST",
			body: JSON.stringify({ name: Iname, email: Iemail, password: Ipassword, organization: Iorganization }),
			headers: { "Content-Type": "application/json" },
		});

		if (response.ok) {
			// If successful, redirect the browser to the profile page
			document.location.replace("/login");
			console.log(response);
		} else {
			alert(response.statusText);
		}
	}
};

const getLoginPageHandler = async (event) => {
	event.preventDefault();
	console.log("Get Login Page");
	document.location.replace("/login");
};

document.getElementById("SignUp-submit").addEventListener("click", signUpEventHandler);
document.getElementById("GetLoginPage").addEventListener("submit", getLoginPageHandler);
