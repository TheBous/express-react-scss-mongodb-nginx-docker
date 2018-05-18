# Boilerplate multistaging(dev-prod) with docker :whale: ReactJS :beginner:, ExpressJS :sparkler: and mongoDB :leaves:



Scaffolding app to create a project with ReactJS, expressJS and Mongodb as persistence. 
I made it with docker with 2  environments: 
- development: build with webpackDevServer and nodemon
- production: build with Nginx (docker image) and nodemon

I enabled hot live reload both in the Express and in the React Part

![](header.png)

## Run

To run React, Express and Mongo in one shot run in dev mode:

```sh
chmod +x run ./run-dev.sh 
./run.dev.sh
```

and in prod: 

```sh
chmod +x run ./run-prod.sh 
./run.prod.sh
```

## Usage example

With this project, you have an already configured dev&prod environment and you can start frontend and backend with one command though docker


## Release History

* 0.0.1
    * Dev&Prod configuration for docker && boilerplate reactJS-ExpressJS

## Meta

The_Bous [https://github.com/TheBous](https://github.com/dbader/)

## Contributing

1. Fork it 
2. Create your feature branch 
3. Commit your changes 
4. Push to the branch
5. Create a new Pull Request
