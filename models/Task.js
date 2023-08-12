const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Task extends Model { }

Task.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		taskName: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		description: {
			type: DataTypes.STRING,
		},

		date_created: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: DataTypes.NOW,
		},
		status: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		priority: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		timeline: {
			type: DataTypes.FLOAT,
		},
		project_id: {
			type: DataTypes.INTEGER,
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
		modelName: "task",
	}
);

module.exports = Task;
