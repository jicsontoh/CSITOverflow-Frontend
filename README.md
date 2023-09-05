# CSITOverflow-Frontend

## Overview

During my internship, I discovered the complexities of operating within an air gap environment. In search of a collaborative platform for people to exchange ideas and solutions, I developed this full stack web application. This application serves as a simplified variation of Stack Overflow, tailored to the company's needs.

This frontend application is built using React. The backend application is built using Node, Express and MongoDB. Refer to [here](https://github.com/jicsontoh/CSITOverflow-Backend) for the backend code repository.

## How to Install

1. Set up env variables

Create a .env with the backend api link

```
REACT_APP_API_URL=""
```

2. Install node modules

```
$ npm i
```

3. Start using the application!

```
$ npm start
```

If you wish to Dockerise the application, you can apply the following command to create an image

```
$ docker build -t csit-overflow-frontend .
```

Do remember to set the env variables
