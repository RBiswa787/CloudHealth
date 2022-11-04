FROM node:14

WORKDIR /app

COPY package.json .

RUN npm cache clean

RUN npm install

COPY . .

CMD npm start