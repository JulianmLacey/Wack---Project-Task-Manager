const User = require("./USER");
const Task = require("./Task");
const Comment = require("./comment");
const Project = require("./Project");

Project.hasOne(User, {
	foreignKey: "ManagerID",
});

Comment.hasOne(User, {
	foreignKey: "user_id",
});

Comment.belongsTo(Project, {
	foreignKey: "project_id",
});

Task.hasMany(User, {
	foreignKey: "USERID",
});
Task.belongsTo(Project, {
	foreignKey: "PROJECTID",
});

module.exports = { User, Task, Comment };
