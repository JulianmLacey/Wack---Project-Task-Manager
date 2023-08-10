const User = require("./USER");
const Task = require("./Task");

User.hasMany(Task, {
	foreignKey: "tasks",
	onDelete: "CASCADE",
});

Task.belongsTo(User, {
	foreignKey: "tasks",
});

module.exports = { User, Task };
