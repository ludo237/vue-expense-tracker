# Vue Expense Tracker

WIP on a better README, meanwhile things to make this up and running

- Docker
- Node/NPM

## Setup docker

Run `docker-compose up -d --build` to build the mongodb container needed to host the database, unless you want to use something else... be my guest!

## Setup the server

Copy `.env.example` into `.env`, install the necessary dependencies then run `node server` and the server will be up and running, API ready on port 2370. The port is defined inside the `.env` file so you can change it

## Setup the client

Go into the client folder, install the necessary dependencies then run `npm run serve`.
