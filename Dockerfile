# build commands 
FROM node:alpine

WORKDIR .
COPY ./package.json .
RUN npm install

CMD npm run dev