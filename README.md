# ToDoList
Using the MVC (model-view-controller) architecture
## Using Docker:
In the main project directory use the command:
```bash
docker-compose up
```
This will create a docker network with the app in one container and the mongo database in another.
To redeploy this you must use a docker-compose build before using the docker-compose up command again