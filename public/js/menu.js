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
	console.log("joined Project clicked");
	const id = document.getElementById("addprojectinput").value.trim();
	console.log(id);
	event.preventDefault();
	const response = await fetch("/api/users/projects", {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ id }),
	});
	if (response.ok) {
		console.log("joined Project Sucess");
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

let delTask = document.querySelectorAll(".taskDel");
let delTaskEvent = async (id) => {
	console.log("cliked for Delete task: " + id);
	Swal.fire("Any fool can use a computer");
	const response = await fetch("/api/tasks", {
		method: "DELETE",
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
};

delTask.forEach((item) => {
	item.addEventListener("click", (e) => {
		e.preventDefault();
		const id = Number(e.target.id.slice(4));
		console.log(id);
		console.log(id.length);
		if (id > 0) {
			delTaskEvent(id);
		}
		return;
	});
});

let delComment = document.querySelectorAll(".commentDel");
let delCommentEvent = async (id) => {
	console.log("cliked for Delete task: " + id);
	Swal.fire({
		title: "Error!",
		text: "Do you want to continue",
		icon: "error",
		confirmButtonText: "Cool",
	});
	const response = await fetch("/api/comments", {
		method: "DELETE",
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
};

delComment.forEach((item) => {
	item.addEventListener("click", (e) => {
		e.preventDefault();
		const id = Number(e.target.id.slice(4));
		Swal.fire({
			title: "Error!",
			text: "Do you want to continue",
			icon: "error",
			confirmButtonText: "Cool",
		});
		console.log(id);
		console.log(id.length);
		if (id > 0) {
			delCommentEvent(id);
		}
		return;
	});
});

let editTask = document.querySelectorAll(".taskEdit");

async function getTaskData(id) {
	try {
		console.log("cliked for Edit task: " + id);
		const savedTask = await fetch("/api/task", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
			params: JSON.stringify({ id }),
		});
		return savedTask;
	} catch (err) {
		console.log(err);
	}
}

let taskEditEvent = async (id) => {
	const taskData = await getTaskData(id);

	if (taskData) {
		Swal.fire({
			title: "Edit Task",
			html: `<div class="o-grid">
			<div class="o-grid__cell o-grid__cell--width-70 c_cell">
				<div class="o-grid__cell cell">
					<input class="c-field" placeholder="${taskData.taskName}" type="text" id="Name" />
				</div>
				<div class="o-grid__cell cell">
					<input class="c-field" placeholder="${taskData.description}" type="text" id="Description" />
				</div>
			</div>

			<div class="o-grid__cell o-grid__cell--width-30 c_cell">
				<div class="o-grid__cell cell">
					<input class="c-field" placeholder="${taskData.status}" type="number" id="status" />
				</div>
				<div class="o-grid__cell cell">
					<input class="c-field" placeholder="${taskData.priority}" type="number" id="priority" />
				</div>
				<div class="o-grid__cell cell">
					<input class="c-field" placeholder="${taskData.timeline}" type="number" id="DaysLeft" />
				</div>
			</div>
		</div>`,
			confirmButtonText: "Save",
			preConfirm: () => {
				const taskName = Swal.getPopup().querySelector("#Name").value.trim();
				const description = Swal.getPopup().querySelector("#Description").value.trim();
				const status = Swal.getPopup().querySelector("#status").value.trim();
				const priority = Swal.getPopup().querySelector("#priority").value.trim();
				const timeline = Swal.getPopup().querySelector("#Daysleft").value.trim();

				return { taskName: taskName, description: description, status: status, priority: priority, timeline: timeline };
			},
			input: "text",
			icon: "error",
		}).then((result) => {
			console.log(result);
		});
	}
	/*.then((result)=>{
	const response = await fetch("/api/task", {
		method: "PUT",
		params: id;
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(result),
	}););
*/
	if (response.ok) {
		window.location.reload();
	} else {
		alert(respose.statusText);
	}
};

editTask.forEach((item) => {
	item.addEventListener("click", (e) => {
		e.preventDefault();
		const id = Number(e.target.id.slice(5));
		console.log(id);
		console.log(id.length);
		if (id > 0) {
			taskEditEvent(id);
		}
		return;
	});
});
