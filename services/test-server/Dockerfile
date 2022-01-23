FROM node:16-alpine

LABEL name "@channelcheckr/test-server"

RUN npm -g i lerna

WORKDIR /opt/build

COPY package.json .
COPY yarn.lock .
COPY lerna.json .
COPY tsconfig.json .

COPY services/test-server/package.json ./services/test-server/package.json
COPY services/shared/package.json ./services/shared/package.json

RUN yarn install

COPY services/test-server ./services/test-server
COPY services/shared ./services/shared

RUN lerna run build

RUN lerna bootstrap -- --production

CMD [ "node", "services/test-server/dist/app.js" ]
