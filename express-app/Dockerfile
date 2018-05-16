FROM node:8

ENV NPM_CONFIG_LOGLEVEL warn

WORKDIR /express-app/

# Install the packages
COPY package.json .
COPY yarn.lock .

#RUN yarn global add nodemon
RUN yarn

# Copy the app
COPY . .

# Set the environment variables
ARG MONGO_DB_DATABASE
ENV MONGO_DB_DATABASE ${MONGO_DB_DATABASE}

ARG MONGO_DB_USERNAME
ENV MONGO_DB_USERNAME ${MONGO_DB_USERNAME}

ARG MONGO_DB_PASSWORD
ENV MONGO_DB_PASSWORD ${MONGO_DB_PASSWORD}

EXPOSE 3000

CMD ["yarn", "start"]
