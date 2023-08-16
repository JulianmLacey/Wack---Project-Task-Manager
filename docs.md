# SLACK CLONE/PROJECT TRACKER - WACK - DOCUMENTATION

### DATABASE

- SEEDS
- MODELS
- ASSOCIATIONS

### ROUTES - sessions/cookies

/ - View Routes
-/ -home dashboard (signup if not logged in)
-/login
-/signup

/api - app used api

/dev - all api routes
GET, GET/:id, POST, PUT, DELETE for each endpoint
-/tasks
-/comments
-/users
-/projects
-/comments

## API

## DATABASE

wack_db

## Models

### Projects

- id:
  INT
  allowNull: false

-name:
STRING,
allowNull: false,

- missions_statement:
  STRING,
  allowNull: false

- manager_id:
  INT,
  allowNull: false,
  references:
  model: "user",
  key: "id",

### User

- id:
  INT,
  allowNull: false,
  primaryKey: true,
  autoIncrement: true,

- name:
  STRING,
  allowNull: false,

- email:
  STRING,
  allowNull: false,
  unique: true,
  validate: {
  isEmail: true,
  },
- password:
  STRING,
  allowNull: false,
  validate:
  len: [8],

* Not Used \*

- project_s:
  INTEGER,
  allowNull: true,
  unique: false,

### Tasks

- id:
  INT,
  allowNull: false,
  primaryKey: true,
  autoIncrement: true,
- taskName:
  STRING,
  allowNull: false,
- description:
  STRING,

- date_created:
  DATE,
  allowNull: false,
  defaultValue: DataTypes.NOW,

- status:
  INT,
  allowNull: false,
- priority:
  INT,
  allowNull: false,
- timeline:
  FLOAT,
- project_id:
  INT,
  references:
  model: "project",
  key: "id",

### Comments

- id:
  INT,
  allowNull: false,
  primaryKey: true,
  autoIncrement: true,

- content:
  STRING,

- date_created:
  DATEONLY,
  allowNull: false,
  defaultValue: DataTypes.NOW,

- user_id:
  INT,
  references:
  model: "user",
  key: "id",
  unique: false,

- project_id:
  INT,
  references:
  model: "project",
  key: "id",
  unique: false,

## Sequalize Associations

- User - hasOne - Project
  foreignKey: manager_id

- Project - belongsTo - User
  foreignKey: manager_id

- Project - belongsTo - User
  foreignKey: manager_id

- Project - hasMany - Task
  foreignKey: project_id

- Task - belongsTo - Project
  foreignKey: project_id

- Project - hasMany - Comment
  foreignKey: project_id

- Comment - belongsTo - Project
  foreignKey: project_id

- User - hasMany - Comment
  foreignKey: user_id

- Comment - belongsTo - User
  foreignKey: user_id

- User - belongsToMany - Project
  through: UserProject

- Project - belongsToMany - User
  through: UserProject

### Task Board

- TASK LIST

  - TASK

    - NAME: string
    - TASKID
    - TIMELINE (Time Left)
    - STATUS
    - PRIORITY
    - ASSIGNED TO (USERIDs)

  - MESSAGES
    - ID
    - TEXT
    - DATE
    - CREATED_BY (USERID)
    - CHANNEL_ID (CHANNELID)

# PAGES

- Login
- Signup
- Home

## NPM Packages

- Express
- bcrypt
- express-session
- handlebars
- mysql2
- sequelize
- uuid-int

## New Technology

- Faker - Generate Seed Data (Python)
- Sweet Alerts 2 - Popups
- BlazeUI - UI FrameWork
