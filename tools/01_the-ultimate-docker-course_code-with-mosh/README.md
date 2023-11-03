# The Ultimate Docker Course (Code with Mosh)

## Linux Command Line

- `echo <something>`
  - `echo Hello`
  - `echo $0`
- `whoami`
- `history`
- `!<line from history list>`
  - `!2`
- `apt`
- `pwd`
- `ls`
  - `ls -1`
  - `ls -l`
  - `ls /etc/apt`
- `cd`
  - `cd /etc/apt`
  - `cd ..`
  - `cd ~`
- `mkdir <directory name>`
- `mv <old_path> <new_path>`
- `touch <filename 1> <filename 2>`
- `rm <filename 1> <filename 2>`
  - `rm file*`
  - `rm -r <directory name>` remove the directory
- `cat <filename>`
  - `cat file1.txt file2.txt > combined.txt` -> combine two file
- `more <filename>` -> to see long file easily
- `less <filename>` -> replacement for more with more feature
- `head -n <line count> <filename>` -> see some line from top
  - `head -n 5 /etc/adduser.conf`
- `tail -n <line count> <filename>` -> see some line from bottom
  - `tail -n 5 /etc/adduser.conf`
- `grep` -> searching text
  - `grep hello file1.txt` -> case sensitive search
  - `grep -i hello file1.txt` -> case-insensitive search
  - `grep root /etc/passwd`
  - `grep root file1.txt file2.txt` -> search in multiple files
  - `grep root -r /etc` -> search in directory
- `find` -> finding files and directory
  - `find /etc -type d` -> finding only directory
  - `find /etc -type f` -> finding only files
  - `find /etc -type f -name "f*"` -> finding files that start with f
  - `find /etc -type f -iname "f*"` -> finding files that start with f or F
  - `find / -type f -name "*.py" > list_of_python_files.txt`
- chaining commands
  - `mkdir text ; cd text ; ls`
  - `mkdir text && cd text && ls`
  - `mkdir text || echo "directory already exits"`
- environment variables
  - `printenv`
  - `printenv PATH`
  - `echo $PATH`
  - `export DB_USER=shihab`
- process
  - `ps` -> list all the processes
  - `sleep 3 &` -> sleep process for 3 seconds
  - `kill <process id>`
- managing users
  - `adduser <user name>`
  - `useradd -m <user name>`
  - `usermod -s /bin/bash shihab2` -> chaining the user default shell
  - `userdel <user name>`
  - `cat /etc/passwd`
  - `cat /etc/shadow`
- managing groups
  - `addgroup <group name>`
  - `groupadd <group name>`
  - `cat /etc/group`
  - `usermod -G <group name> <user name>`
  - `groups <user name>` -> listing all groups of the user
- file permissions
  - `chmod u+x <filename>` -> for user add execute permissions
  - `chmod u-x <filename>` -> for user remove execute permissions

## Building Images

- Dockerfile instruction
  - `FROM`
  - `WORKDIR`
  - `COPY`
  - `ADD`
  - `RUN`
  - `ENV`
  - `EXPOSE`
  - `USER`
  - `CMD`
  - `ENTRYPOINT`
- Commands
  - `docker build -t <image name>:<tag> .` | `docker image build -t <image name>:<tag> .`
  - `docker image ls` | `docker images`
  - `docker history <image name>`
  - `docker image prune` -> remove all dangling images
  - `docker container prune` -> remove all stopped containers
  - `docker image rm <image name | image id>`
  - `docker image tag react-app:latest react-app:1.2`
  - `docker push shihab4t/react-app`
  - `docker image save -o <zip-folder-name.tar> <image name>` -> saving image as zip
  - `docker image load -i <zip-folder-name.tar>` -> load image from the zip

## Working with Containers

- Commands
  - `docker ps` | `docker container ls`
  - `docker run <image name>`
  - `docker run -d <image name>`
  - `docker run -d --name <container name> <image name>`
  - `docker logs <container id>` -> see the container stdout log
  - `docker logs -f <container id>` -> see the container stdout log and follow it
  - `docker logs -d 5 <container id>` -> see the container stdout log last 5 lines
  - `docker logs -t <container id>` -> see the container stdout log with timestamps
  - `docker run -p <local port>:<container port> <image name>` -> map local system port to container port
  - `docker exec <container name> <command name>`
  - `docker stop <container name>` -> stop a container
  - `docker start <container name>` -> start a stopped container
  - `docker container rm <container name>` | `docker rm <container name>` | `docker rm -f <container name>`
  - `docker container prune`
  - `docker volume` -> volume is storage outside of container (can be local or remote)
  - `docker volume create <volume name>`
  - `docker volume inspect <volume name>`
  - `docker run -v <volume name>:<container path> react-app` -> mount a volume to container path
  - `docker run -v <host path>:<container path> react-app` -> mount a host path to container path
  - `docker cp <container name>:<absolute path> <host path>` -> copy container to host mechine
  - `docker cp <host path> <container name>:<absolute path>` -> copy host to container mechine
  - `docker container rm $(docker container ls -aq)` -> remove all containers
  - `docker image rm $(docker image ls -q)` -> remove all containers

## Running multi-container Apps

- Commands
  - `docker compose build`
  - `docker compose build --no-cache`
  - `docker compose up`
  - `docker compose up --build`
  - `docker compose up -d`
  - `docker compose ps`
  - `docker compose down`
  - `docker compose logs`
  - `docker compose logs -f`
- Docker networking
  - Network types
    - bridge
    - host
    - none

## Deploy dockerized application

- Cluster Solutions
  - Docker Swarm
  - Kubernetes
- Docker Machine
  - `docker create --driver digitalocean --digitalocean-access-token <token> vidly`
