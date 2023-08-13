const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Project extends Model { }

Project.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		missions_statement: {
			type: DataTypes.STRING,
			allowNull: false,
		},

		manager_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: "user",
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

module.exports = Project;
