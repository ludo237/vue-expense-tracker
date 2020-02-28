# Vue Expense Tracker

A Simple, easy to use, self-hostable expense tracker built with VueJs, Node and Docker.

## Setup docker for the server

First thing first you need to make sure the server is up and running. To do that go into `./servers` and copy `.env.example` into `.env`, install the necessary dependencies. After that you can start all the containers by going into the root project and run `docker-compose up -d --build`. This will light up the server as well as the mongoDB database on a dedicated docker network.

The default server port is 2370 and it's exposed to the host, mongodb is not exposed but you can interact with it using the third container called mongo-express which is exposed on port 8081. You can change those parameters, right now they are hardcoded but in the future everything will be on a configuration file.

## Setup the client

The client is easy to set up. Go into the `./client` folder, install the necessary dependencies with `npm install` then run `npm run serve` which will bring the application alive on 8080 port.
