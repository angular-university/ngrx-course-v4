
# Repository contents

This repository contains the full application of the [Angular Ngrx Reactive Extensions Architecture Course](https://angular-university.io/course/angular2-ngrx).

This course repository is updated to Angular v5, there is a Yarn lock file available.

![Angular Ngrx Course](https://angular-academy.s3.amazonaws.com/thumbnails/ngrx-angular.png)

# Installation pre-requisites

For running this project we need and npm installed on our machine. These are some tutorials to install node in different operating systems:

*Its important to install the latest version of Node*

- [Install Node and NPM on Windows](https://www.youtube.com/watch?v=8ODS6RM6x7g)
- [Install Node and NPM on Linux](https://www.youtube.com/watch?v=yUdHk-Dk_BY)
- [Install Node and NPM on Mac](https://www.youtube.com/watch?v=Imj8PgG3bZU)

# Data For the In-Memory Database

The data used in the backend can be found on this file [db-data.ts](https://raw.githubusercontent.com/angular-university/ngrx-course/master/src/server/db-data.ts).

# Installing the Angular CLI

With the following command the angular-cli will be installed globally in your machine:

    npm install -g @angular/cli


# How To install this repository

We can install the master branch using the following commands:

    git clone https://github.com/angular-university/ngrx-course.git
    cd ngrx-course
    
If you prefer the Yarn package manager, instead of npm install you can also run:

    yarn

Although npm install would also work, its recommended to use Yarn to install the course dependencies. Yarn has the big advantage that if you use it you will be
installing the exact same dependencies than I installed in my machine, so you wont run into issues caused by semantic versioning updates.

This should take a couple of minutes. If there are issues, please post the complete error message in the Questions section of the course.  

If you start the repository at this stage, you might run into this temporary [CLI issue](https://github.com/angular-university/ngrx-course). To solve it, simply edit any Typescript file, and hit space and the problem will be fixed.

But in general its better not to take the course using the master repository, but instead to switch to the several branches as presented in the lessons.
    
# To Run the Chat Application Backend Server 

We can start the chat backend server with the following command:

    npm run api-server
    
This will start a server on localhost port 8090. 

# To Run the Chat Application Frontend Server 

We can start the chat  application with the following command:

    npm start 
    
  The application is visible at port 4200 - [http://localhost:4200](http://localhost:4200)


# Installing branches other than master

At certain points along the course, you will be asked to checkout other remote branches other than master. You can view all branches that you have available remotely using the following command:

    git branch -a
    
  The remote branches have their starting in origin, such as for example start-with-ngrx-store-now.
  
  We can checkout the remote branch and start tracking it with a local branch that has the same name, by using the following command:
  
      git checkout -b start-with-ngrx-store-now origin/start-with-ngrx-store-now

# RxJs and Reactive Patterns Angular Architecture Course

If you are looking for the RxJs and Reactive Patterns Angular Architecture Course code, the repo with the full code can be found here:

[RxJs and Reactive Patterns Angular Architecture Course](https://angular-university.io/course/reactive-angular-architecture-course)

![RxJs and Reactive Patterns Angular Architecture Course](https://s3-us-west-1.amazonaws.com/angular-academy/blog/images/rxjs-reactive-patterns-small.png)


# Angular 2 and Firebase - Build a Web Application Course

If you are looking for the Angular 2 and Firebase - Build a Web Application Course code, the repo with the full code can be found here:

[Angular 2 and Firebase - Build a Web Application](https://angular-university.io/course/build-an-application-with-angular2)

[Github repo for this course](https://github.com/angular-university/angular-firebase-app)

![Angular firebase course](https://angular-academy.s3.amazonaws.com/thumbnails/angular_app-firebase-small.jpg)


# Complete Typescript 2 Course - Build A REST API

If you are looking for the Complete Typescript 2 Course - Build a REST API, the repo with the full code can be found here:

[https://angular-university.io/course/typescript-2-tutorial](https://github.com/angular-university/complete-typescript-course)

[Github repo for this course](https://github.com/angular-university/complete-typescript-course)

![Complete Typescript Course](https://angular-academy.s3.amazonaws.com/thumbnails/typescript-2-small.png)



