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

## Mock backend microservices


From the root directory of this repo, run this command:

```sh
node testdata/test-server.js
```

Mock Conference service runs at `localhost:5000`
Mock Session service runs at `localhost:5001`
