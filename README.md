docker :
1.sudo dnf install docker
2.sudo systemctl start docker
3.sudo docker pull mongo
4.sudo docker run -d --name mongodb -p 27017:27017 mongo
5.sudo docker ps

last-step 1:getIP of Docker=> sudo docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' mongodb
last-step 2: const url = 'mongodb://<container-ip>:27017/mydb';
