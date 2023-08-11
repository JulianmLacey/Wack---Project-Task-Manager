const User = require("./USER");
const Task = require("./Task");
const Comment = require("./comment");
const Project = require("./Project");
const UserProject = require("./userproject");

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
	foreignKey: "user_id",
});

Comment.belongsTo(Project, {
	foreignKey: "user_id",
});

User.hasOne(Comment, {
	foreignKey: "project_id",
});

Comment.belongsTo(User, {
	foreignKey: "project_id",
});

UserProject.belongsTo(User, {
	foreignKey: "user_id",
});
UserProject.belongsTo(Project, {
	foreignKey: "project_id",
});

User.belongstoMany(Project, {
	as: "ProjectsForUser",
	through: UserProject,
	foreignKey: "user_id",
});

Project.belongstoMany(User, {
	as: "UsersInProject",
	through: UserProject,
	foreignKey: "project_id",
});

User.belongstoMany();

module.exports = { User, Task, Comment, Project };
