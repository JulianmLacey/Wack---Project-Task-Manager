document.querySelector("#sign-up-form").addEventListener("submit", async (event) => {
  event.preventDefault();
  const email = document.getElementById("email").value.trim();
  const name = document.getElementById("name").value.trim();
  const password = document.getElementById("password").value.trim();

  const response = await fetch("/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  });

  if (response.ok) {
    window.location.replace("/login");
  } else {
    alert(response.statusText);
  }
});
