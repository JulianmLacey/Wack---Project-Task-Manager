document.querySelector("#addProject").addEventListener("click", async (event) => {
	const response = await fetch("/api/users/login", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ email, password }),
	});

	if (response.ok) {
		window.location.replace("/home");
	} else {
		alert(respose.statusText);
	}
});
