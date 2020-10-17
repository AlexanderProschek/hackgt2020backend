FROM node:latest
MAINTAINER Alexander Proschek <alexander.proschek@gmail.com>

WORKDIR /usr/src/hackgtbackend
COPY . /usr/src/hackgtbackend

RUN npm install

EXPOSE 3000
CMD ["npm", "start"]