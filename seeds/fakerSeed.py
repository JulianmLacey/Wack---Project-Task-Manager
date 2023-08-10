# pip install Faker
import random
from faker import Faker
faker = Faker()

"""
# USER SEED
with open('userData.json', 'a') as f:
    f.write('[ \n')
    for _ in range(10):
        f.write('{\n')
        f.write('"name": "' + faker.name() + '",\n' + '"email": "' +
                faker.email() + '",\n' + '"password": "' + faker.password() + '"\n')
        f.write('},\n')
    f.write('\n]')
"""
"""
# PROJECT SEED
with open('projectData.json', 'a') as f:
    f.write('[ \n')
    for _ in range(3):
        f.write('{\n')
        f.write('"name": "' + faker.company() + '",\n' + '"mission_statement": "' +
                faker.text() + '",\n' + '"ManagerID": "' + str(int(random.random()*9)) + '"\n')
        f.write('},\n')
    f.write('\n]')
"""

# TASK SEED
with open('tasksData.json', 'a') as f:
    f.write('[ \n')
    for _ in range(3):
        f.write('{\n')
        f.write('"taskName": "' + faker.company() + '",\n' +
                '"description": "' + faker.text() + '",\n' +
                '"status": "' + str(int(random.random()*5)) + '",\n' +
                '"priority": "' + str(int(random.random()*5)) + '",\n' +
                '"timeline": "' + str(random.random()*5) + '",\n' +
                '"USERID": "' + str(int(random.random()*9)) + '",\n' +
                '"PROJECTID": "' + str(int(random.random()*3)) + '"\n')
        f.write('},\n')
    f.write('\n]')
