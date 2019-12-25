FROM node:10-alpine
WORKDIR /workdir
COPY ["package.json", "yarn.lock", "./"]
RUN yarn install
COPY . .
CMD ["yarn", "start" ]
