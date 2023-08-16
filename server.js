const path = require("path");
const express = require("express");
const session = require("express-session");
const expHandles = require("express-handlebars");
const routes = require("./controllers");
const logger = require("./utils/logger");
const Handlebars = require("handlebars");

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;
const handles = expHandles.create({});

//const hbs = exphbs.create({ helpers });

const Session = {
	secret: "Super secret secret",
	resave: false,
	saveUninitialized: false,
	store: new SequelizeStore({
		db: sequelize,
	}),
};
app.use(logger);
app.use(session(Session));
app.engine("handlebars", handles.engine);

app.set("view engine", "handlebars");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
	app.listen(PORT, () => console.log("Now listening"));
});
