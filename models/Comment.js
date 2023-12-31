const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Comment extends Model {}

Comment.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		content: {
			type: DataTypes.STRING,
		},
		date_created: {
			type: DataTypes.DATEONLY,
			allowNull: false,
			defaultValue: DataTypes.NOW,
		},

		user_id: {
			type: DataTypes.INTEGER,
			references: {
				model: "user",
				key: "id",
				unique: false,
			},
		},

		project_id: {
			type: DataTypes.INTEGER,
			references: {
				model: "project",
				key: "id",
				unique: false,
			},
		},
	},
	{
		sequelize,
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: "comment",
	}
);

module.exports = Comment;
