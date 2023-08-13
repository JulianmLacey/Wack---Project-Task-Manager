const loginForm = document.querySelector("#login-form");

loginForm.addEventListener("submit", async (event) => {
  const name = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  event.preventDefault();

  const response = await fetch("/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, password }),
  });

  if (response.ok) {
    window.location.replace("/home");
  } else {
    alert(respose.statusText);
  }
});
