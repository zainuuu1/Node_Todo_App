# Node_Todo_App
This is a simple Node-Todo-App using express. It runs on port 3000.

**To run this app without Docker, make sure you have node installed then run the following commands:**
> npm install

> npm start

**To run this app with Docker, run the following commands:**
> docker image build -t node_todo_app .

> docker run -d -p 3000:3000 node_todo_app

This will run the app inside container and map's the port 3000 of container with system's port 3000.

Now you can access the app on both <u>http://containerIP:3000</u> & <u>http://systemIP:3000</u>

Also you can see the logs of container to see app logs:
> docker logs containerID

If you want to continously see the logs of container then do:
> watch docker logs containerID
