# pip install Faker
import random, os
from faker import Faker
faker = Faker()


# USER SEED
def seedUser():

    with open('userData.json', 'w') as f:
        f.write('[ \n')
        for _ in range(10):
            f.write('{\n')
            f.write('"name": "' + faker.name() + '",\n' + 
            '"email": "' + faker.email() + '",\n' + 
            '"password": "' + faker.password() + '",\n' +
            '"organization": ' +  (str(int(random.random()*5)+1) if (int(random.random()*3)) else 'null') + '\n')
            f.write('},\n')
        f.write('\n]')

# PROJECT SEED
def seedProject():
    with open('projectData.json', 'w') as f:
        f.write('[ \n')
        for _ in range(3):
            f.write('{\n')
            f.write('"name": "' + faker.company() + '",\n' + '"missions_statement": "' +
            " ".join(faker.words(5)) + '",\n' + '"manager_id": ' + str(int(random.random()*9)+1) + '\n')
            f.write('},\n')
        f.write('\n]')


# TASK SEED
def seedTask():
    with open('tasksData.json', 'w') as f:
        f.write('[ \n')
        for _ in range(3):
            f.write('{\n')
            f.write('"taskName": "' + faker.company() + '",\n' +
                    '"description": "' + " ".join(faker.words(5)) + '",\n' +
                    '"status": "' + str(int(random.random()*5)+1) + '",\n' +
                    '"priority": "' + str(int(random.random()*5)+1) + '",\n' +
                    '"timeline": "' + str((random.random()*5)) + '",\n' +
                    '"user_id": "' + str(int(random.random()*9)+1) + '",\n' +
                    '"project_id": "' + str(int(random.random()*3)+1) + '"\n')
            f.write('},\n')
        f.write('\n]')


#COMMENT SEED
def seedComment():
    with open('commentData.json', 'w') as f:
        f.write('[ \n')
        for _ in range(20):
            f.write('{\n')
            f.write('"content": "' + " ".join(faker.words(5)) + '",\n' +
                    '"user_id": ' + str(int(random.random()*9)+1) + ',\n' +
                    '"project_id": ' + str(int(random.random()*3)+1) + '\n')
            f.write('},\n')
        f.write('\n]')

def seedUserTable():
    with open('userProjectData.json', 'w') as f:
        f.write('[ \n')
        for _ in range(5):
            f.write('{\n')
            f.write('"user_id": ' + str(int(random.random()*9)+1) + ',\n' +
                    '"project_id": ' + str(int(random.random()*3)+1) + '\n')
            f.write('},\n')
        f.write('\n]')

#seedUser()
#seedProject()
#seedTask()
#seedComment()
seedUserTable()