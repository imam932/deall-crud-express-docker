# Skill Test - Deall BE
## Clone Project and run local
1. clone repository
```
git clone https://github.com/imam932/deall-crud-express-docker.git
```
2. open directory project
```
cd deall-crud-express-docker
```
3. start mongoDB service
```
sudo systemctl start mongod
```
3. run command
```
npm install
node service.js
```

# API Documentation With Collection Postman
download [API Collection](https://github.com/imam932/deall-crud-express-docker/blob/master/Deall%20Skill%20Test.postman_collection.json) and import to postman app

Or Link https://github.com/imam932/deall-crud-express-docker/blob/master/Deall%20Skill%20Test.postman_collection.json

# Flow API Authentication and Authorization

##  Flow App

<img src="https://github.com/imam932/deall-crud-express-docker/blob/master/screenshot/architecture%20auth.png" width="600">

## Flow Login

<img src="https://github.com/imam932/deall-crud-express-docker/blob/master/screenshot/login.png" width="500">

## Flow Register
To register does not require credentials

<img src="https://github.com/imam932/deall-crud-express-docker/blob/master/screenshot/register.png" width="500">

# Flow API CRUD User

## Create User
In creating a user requires credentials as admin

<img src="https://github.com/imam932/deall-crud-express-docker/blob/master/screenshot/create%20user.png" width="500">

## Get All User
In fetching the user list, you can use the user and admin credentials. This api can be used to search for users by name

<img src="https://github.com/imam932/deall-crud-express-docker/blob/master/screenshot/list%20user.png" width="500">

## Get User By Id
In fetching a single user, you can use the user and admin credentials

<img src="https://github.com/imam932/deall-crud-express-docker/blob/master/screenshot/get%20by%20id.png" width="500">

## Update User
In updateing a user requires credentials as admin

<img src="https://github.com/imam932/deall-crud-express-docker/blob/master/screenshot/update%20user.png" width="500">

## Delete User
In deleteing a user requires credentials as admin

<img src="https://github.com/imam932/deall-crud-express-docker/blob/master/screenshot/delete%20user.png" width="500">