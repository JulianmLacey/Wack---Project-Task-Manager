var SelectedProject = null;
var urlParams = new URLSearchParams(window.location.search);
document.querySelector("#addprojButton").addEventListener("click", async (event) => {
	const title = document.getElementById("addprojectinputtitle").value.trim();
	const mission_statement = document.getElementById("addprojectinputdescription").value.trim();
	event.preventDefault();
	const response = await fetch("/api/projects", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ title, mission_statement }),
	});
	if (response.ok) {
		window.location.reload();
	} else {
		alert(respose.statusText);
	}
});

document.querySelector("#joinProjButton").addEventListener("click", async (event) => {
	const id = document.getElementById("addprojectinput").value.trim();
	event.preventDefault();
	const response = await fetch("/api/users/projects", {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ id }),
	});
	if (response.ok) {
		window.location.reload();
	} else {
		alert(respose.statusText);
	}
});
document.querySelector("#addtask").addEventListener("click", async (event) => {
	console.log("addTask clicked");
	const taskName = document.getElementById("Name").value.trim();
	const description = document.getElementById("Description").value.trim();
	const status = document.getElementById("status").value.trim();
	const priority = document.getElementById("priority").value.trim();
	const timeline = document.getElementById("DaysLeft").value.trim();
	const index = window.location.pathname.split("/")[3];
	const project_id = index ? index : document.getElementById("projectMenu").firstElementChild.id;
	event.preventDefault();

	const response = await fetch("/api/tasks", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ taskName, description, status, priority, timeline, project_id }),
	});

	if (response.ok) {
		window.location.reload();
	} else {
		alert(respose.statusText);
	}
});
document.querySelector("#addComment").addEventListener("click", async (event) => {
	console.log("add Comment clicked");
	const content = document.getElementById("commentInput").value.trim();
	const index = window.location.pathname.split("/")[3];
	const project_id = index ? index : document.getElementById("projectMenu").firstElementChild.id;
	event.preventDefault();

	const response = await fetch("/api/comments", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ content, project_id }),
	});

	if (response.ok) {
		window.location.reload();
	} else {
		alert(respose.statusText);
	}
});
function containsOnlyNumbers(str) {
	return /^\d+$/.test(str);
}

let menuItems = document.querySelectorAll(".MenuItem");
let clickEvent = async (el_id) => {
	console.log("clicked" + el_id);
	document.location.replace("/api/projects/" + el_id);
};

menuItems.forEach((item) => {
	item.addEventListener("click", (e) => {
		const id = Number(e.target.id);
		e.preventDefault();
		SelectedProject = id;
		if (Number.isInteger(id) && id > 0 && containsOnlyNumbers(e.target.id)) {
			clickEvent(e.target.id);
		}
		return;
	});
});

/*
document.querySelectorAll(".MenuItem").addEventListener("click", async (e) => {
	
	console.log(e.target.id);
	try {
		const response = await fetch("/api/projects", {
			method: "GET",
			params: { id: e.target.id },
			headers: {
				"Content-Type": "application/json",
			},
		});

		if (response.ok) {
			//window.location.reload();
		} else {
			alert(respose.statusText);
		}
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});
*/
