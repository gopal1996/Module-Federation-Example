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

# Bonus

you can also create module federation of any application using below command
`npx create-mf-app`

# Reference Link

- [Module Federation examples](https://github.com/module-federation/module-federation-examples)

- [Module Federation concept](https://webpack.js.org/concepts/module-federation/)
- [Multi-Framework example](https://www.angulararchitects.io/en/aktuelles/multi-framework-and-version-micro-frontends-with-module-federation-the-good-the-bad-the-ugly/)
- [Info site](https://module-federation.github.io/)
- [Youtube playlist](https://www.youtube.com/playlist?list=PLWSiF9YHHK-DqsFHGYbeAMwbd9xcZbEWJ)
