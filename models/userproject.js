const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class UserProject extends Model {}

UserProject.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true,
		},
		user_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: "user",
				key: "id",
			},
		},
		project_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: "project",
				key: "id",
			},
		},
	},
	{
		sequelize,
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: "project",
	}
);

module.exports = UserProject;
