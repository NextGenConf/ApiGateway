# ApiGateway

This repo contains the microservice exposing the GraphQL API for the NextGenConf.

## Description

We're running ts-node, using apollo-server to run our GraphQL schema.

First, get node dependencies:
```
npm install
```

Then start the server using:
```
npm start
```

Currently the server is configured to get data from a conference service running at:
```
http://localhost:3000
```

For testing, a JSON file is included that can be served using json-server:
```
npm install -g json-server
json-server.cmd testdata\conferences.json
```
