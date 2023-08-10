# SLACK CLONE/PROJECT TRACKER - WACK - DOCUMENTATION

KEEP DOCS UP TO DATE WITH EACH COMMIT TO MAKE LIFE EASIER.

What too add:
make a function, slap it in the docs

## TODO:

### DATABASE

- SEEDS
- MODELS
- ASSOCIATIONS

### ROUTES - sessions/cookies

- POST signup credentials
- POST LOGIN CREDENTIALS

- on valid login return session cookie and render page with user information

  - User Channels

  - Channel Messages (PREVIOUS 20?)

    - TEXT
    - CREATED_BY
    - Author name from userID

  - Organization
    - TASKBOARD
      - Tasks
        - priority
        - status
        - timeline

## API

- CREATE TASK
- CREATE CHANNEL

- POST MESSAGE

## DATABASE

### Channels

- id: CHANNELID
- name: STRING
- isPublic
  - YES; ALL USERS
  - NO; ONLY TASK USERS
    - TASK ASSIGNED TO
  - NO; ONLY INVITED USERS
- HAS MANY MESSAGES
- BELONGS TO MANY USERS

### Users

- id: USERID
- USER_TASKLIST
- EMAIL: string
- PASSWORD: string - HASHED

- PROFILE
  - NAME
  - PROFILE PIC?
  - BIO

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

- LOGIN
- SIGNUP
- DASHBOARD

  - PARTIALS
    - TASKBOARD
    - CHANNELS/MESSAGE THREADS

## FEATURES

- MESSAGING - Socket.io Library? for syncronus messaging, possible sencond server for messaging?
- CHANNELS
- DIRECT MESSAGES
- TASK BOARD

## NOTES
