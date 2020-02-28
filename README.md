# Vue Expense Tracker

WIP on a better README, meanwhile things to make this up and running

- Docker
- Node/NPM

## Setup docker for the server

First thing first you need to make the server up and running. To do that go into `./servers` and copy `.env.example` into `.env`, install the necessary dependencies. After that you can start all the containers by going into the root project and run `docker-compose up -d --build`. This will light up the server as well as the mongoDB database on a dedicated docker network.

The server port is 2370 and it's exposed to the host, mongodb is not exposed but you can interact with it using the third container called mongo-express which is exposed on port 8081.

## Setup the client

Go into the client folder, install the necessary dependencies then run `npm run serve`.
