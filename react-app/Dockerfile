FROM node:9.6.1

ENV NPM_CONFIG_LOGLEVEL warn

WORKDIR /react-app/

RUN yarn
#RUN yarn global add npm-run-all

COPY . .

#specify directly which port do u use
ARG PORT
ENV PORT ${PORT}

CMD ["yarn", "start"]