const sequelize = require("../config/connection");
const { User, Project, Comment, Task } = require("../models");

const userData = require("./userData.json");
const projectData = require("./projectData.json");
const taskData = require("./taskData.json");
const commentData = require("./commentData.json");

const seedDatabase = async () => {
	await sequelize.sync({ force: true });

	const users = await User.bulkCreate(userData, {
		individualHooks: true,
		returning: true,
	});

	const projs = await Project.bulkCreate(projectData, {
		individualHooks: true,
		returning: true,
	});

	const comms = await Comment.bulkCreate(taskData, {
		individualHooks: true,
		returning: true,
	});

	const tasks = await Task.bulkCreate(commentData, {
		individualHooks: true,
		returning: true,
	});

	process.exit(0);
};

seedDatabase();
