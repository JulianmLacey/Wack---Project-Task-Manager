const Sequelize = require("sequelize");
require("dotenv").config();

Sequelize.DATE.prototype._stringify = function _stringify(date, options) {
	date = this._applyTimezone(date, options);
	return date.format("YYYY-MM-DD HH:mm:ss");
};

let sequelize;

if (process.env.JAWSDB_URL) {
	sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
	sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
		host: "localhost",
		dialect: "mysql",
		define: {
			timestamps: false,
		},
		port: 3306,
	});
}

module.exports = sequelize;
