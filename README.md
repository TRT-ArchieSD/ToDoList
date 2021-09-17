# ToDoList
### to start the app use:
### nodemon app.js

### nodejs app can be found at 127.0.0.1:3000 (localhost:3000)

### Using the MVC (model-view-controller) architecture


## Start or Create the Database
### mongodb on docker command: docker run --name mongodb -d -p 27017:27017 mongo   
### if already made use: docker start mongodb

### enter the mongo container ( docker exec -it mongodb /bin/bash ) and create user:
### db.createUser({ user:"user", pwd: "password",roles: [{role: "readWrite", db: "todo"}]})