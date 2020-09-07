FROM node:12-alpine

WORKDIR /usr/src/app

COPY package*.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]