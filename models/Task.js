const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Task extends Model {}

Task.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		name: {
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
			type: DataTypes.FLOAT,
			allowNull: false,
		},
		priority: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		timeline: {
			type: DataTypes.FLOAT,
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

module.exports = Task;
