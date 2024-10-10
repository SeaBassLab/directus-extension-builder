FROM node:latest

WORKDIR /app

COPY . /app

RUN npm install --omit=dev

RUN npm run build

EXPOSE 8080

CMD ["npm", "start"]

