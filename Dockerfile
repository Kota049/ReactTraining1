FROM node:20.3-slim

WORKDIR /usr/src/app/
# COPY ./app/package-lock.json /usr/src/app
# COPY ./app/package.json /usr/src/app

RUN chown node:node .
USER node

# RUN npm ci
