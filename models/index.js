const User = require("./USER");
const Task = require("./Task");

User.hasMany(Task, {
	foreignKey: "tasks",
	onDelete: "CASCADE",
});

Task.belongsTo(User, {
	foreignKey: "tasks",
});

Task.hasManu(Comment, {
	foreignKey: "project_id",
});

Comment.belongsTo(Task, {
	foreignKey: "comment_id",
});

module.exports = { User, Task, Comment };
