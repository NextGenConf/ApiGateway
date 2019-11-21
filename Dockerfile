FROM node:13.0.1-alpine

RUN apk add --no-cache ca-certificates

WORKDIR /app
COPY . ./

RUN npm install

RUN npm run build

WORKDIR /app/dist

EXPOSE 4000

CMD ["node", "index.js"]
