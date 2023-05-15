# Skill Test - Deall BE
# Table of Contents
1. [ Clone Project and run local ](#clone)
2. [ API Documentation With Collection Postman ](#postman)

<a name="clone"></a>
# Clone Project and run local
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

<a name="postman"></a>
# API Documentation With Collection Postman
download [API Collection](https://github.com/imam932/deall-crud-express-docker/blob/master/Deall%20Skill%20Test.postman_collection.json) and import to postman app

Or Link https://github.com/imam932/deall-crud-express-docker/blob/master/Deall%20Skill%20Test.postman_collection.json

<a name="flow"></a>
# Flow API Authentication and Authorization

##  Flow App

<img src="https://github.com/imam932/deall-crud-express-docker/blob/master/screenshot/architecture%20auth.png" width="600">

## Flow Login

<img src="https://github.com/imam932/deall-crud-express-docker/blob/master/screenshot/login.png" width="500">

## Flow Register
To register does not require credentials

<img src="https://github.com/imam932/deall-crud-express-docker/blob/master/screenshot/register.png" width="500">

<a name="flowcrud"></a>
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

# Documentation API Request and Response With Screenshot

## 1. Register User
<img src="https://github.com/imam932/deall-crud-express-docker/blob/master/screenshot/api/Api%20register.png" width="500">

## 2. Login
* Login as User

<img src="https://github.com/imam932/deall-crud-express-docker/blob/master/screenshot/api/Login%20as%20User.png" width="500">

* Login as Admin

<img src="https://github.com/imam932/deall-crud-express-docker/blob/master/screenshot/api/Login%20as%20admin.png" width="500">

* Login if user not found

<img src="https://github.com/imam932/deall-crud-express-docker/blob/master/screenshot/api/Login%20user%20not%20found.png" width="500">

## 3. Get List User
* Success Get User, user and admin roles that can access this api

<img src="https://github.com/imam932/deall-crud-express-docker/blob/master/screenshot/api/user%20list.png" width="500">

<img src="https://github.com/imam932/deall-crud-express-docker/blob/master/screenshot/api/user%20list%20end.png" width="500">

* This API can search user by name

<img src="https://github.com/imam932/deall-crud-express-docker/blob/master/screenshot/api/list%20user%20search%20by%20name.png" width="500">

* Get User if token blank

<img src="https://github.com/imam932/deall-crud-express-docker/blob/master/screenshot/api/if%20token%20blank.png" width="500">

* Get User if token failed

<img src="https://github.com/imam932/deall-crud-express-docker/blob/master/screenshot/api/if%20token%20filed.png" width="500">

## 4. Get Detail User
* Get User by ID, user and admin roles that can access this api. In this api the password field is not displayed, useful for limiting access by role users

<img src="https://github.com/imam932/deall-crud-express-docker/blob/master/screenshot/api/user%20detail%20by%20ID.png" width="500">

* Get User with password (only role admin).

<img src="https://github.com/imam932/deall-crud-express-docker/blob/master/screenshot/api/get%20detail%20user%20with%20password%20-%20rule%20admin.png" width="500">

* if not access from role user

<img src="https://github.com/imam932/deall-crud-express-docker/blob/master/screenshot/api/get%20detail%20user%20with%20password%20-%20if%20rule%20user.png" width="500">

## 5. Update User
* Update User, only admin role that can access this api.

<img src="https://github.com/imam932/deall-crud-express-docker/blob/master/screenshot/api/update%20user%20success.png" width="500">

* Update User, if user role access this api.

<img src="https://github.com/imam932/deall-crud-express-docker/blob/master/screenshot/api/update%20user%20with%20role%20user.png" width="500">

## 6. Delete User
* Delete User, only admin role that can access this api.
* Before Delete

<img src="https://github.com/imam932/deall-crud-express-docker/blob/master/screenshot/api/before%20delete.png" width="500">

* Success Delete

<img src="https://github.com/imam932/deall-crud-express-docker/blob/master/screenshot/api/delete%20success.png" width="500">

* After Delete

<img src="https://github.com/imam932/deall-crud-express-docker/blob/master/screenshot/api/after%20delete.png" width="500">