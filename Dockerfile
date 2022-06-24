FROM node:alpine

RUN mkdir -p /usr/src
WORKDIR /personal/

COPY . /personal

RUN npm install

RUN npm run build
EXPOSE  3000
CMD npm run start