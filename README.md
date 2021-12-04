# Module Federation Example

This example show how to interate Angular and React application using module federation

## Application

- profile (Angular application)
- react-host (React application)

The following applications are integrated in the repo

- react-host (Host) <- profile (Remote)

### To run the applicaion follow below step

## react-host

Navigate to **react-host** folder and run `npm start`

## profile (angular)

Navigate to **angular** folder and run `npm run start:profile`

### Open host url

Navigate to `http://localhost:3000/`

# Angular to angular

This repo also thave the example of Angular to angular integration using module federation

## Application

- profile (Angular application)
- home (Angular application)

Navigate to **angular** folder and run `npm run start:profile` & `npm run start:home`

**Make sure you uncomment the below line from the file **

> ./angular/profile/src/app/app.component.html

```
<!-- <router-outlet></router-outlet> -->
```
