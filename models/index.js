const User = require("./USER");
const Task = require("./Task");
const Comment = require("./comment");
const Project = require("./Project");

User.hasOne(Project, {
	foreignKey: "manager_id",
});

Project.belongsTo(User, {
	foreignKey: "manager_id",
});

Project.hasMany(Task, {
	foreignKey: "project_id",
});

Task.belongsTo(Project, {
	foreignKey: "project_id",
});

Project.hasMany(Comment, {
	foreignKey: "project_id",
});

Comment.belongsTo(Project, {
	foreignKey: "project_id",
});

User.hasMany(Comment, {
	foreignKey: "user_id",
});

Comment.belongsTo(User, {
	foreignKey: "user_id",
});

User.belongsToMany(Project, {
	through: "UserProject",
	foreignKey: "user_id",
});

Project.belongsToMany(User, {
	through: "UserProject",
	foreignKey: "project_id",
});

module.exports = { User, Task, Comment, Project };
