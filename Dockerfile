FROM node:latest

WORKDIR /acdc

COPY . /acdc

RUN npm install --omit=dev

RUN npm run build

EXPOSE 8080

CMD ["npm", "start"]

