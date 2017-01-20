
# Repository contents

This repository contains the full application of the Angular Ngrx Reactive Extensions Architecture Course.

![Angular Ngrx Course](https://angular-academy.s3.amazonaws.com/thumbnails/ngrx-angular.png)

# Installation pre-requisites

For running this project we need and npm installed on our machine. These are some tutorials to install node in different operating systems:

*Its important to install the latest version of Node*

- [Install Node and NPM on Windows](https://www.youtube.com/watch?v=8ODS6RM6x7g)
- [Install Node and NPM on Linux](https://www.youtube.com/watch?v=yUdHk-Dk_BY)
- [Install Node and NPM on Mac](https://www.youtube.com/watch?v=Imj8PgG3bZU)


# Installing the Angular CLI

With the following command the angular-cli will be installed globally in your machine:

    npm install -g angular-cli


# How To install this repository

We can install the master branch using the following commands:

    git clone https://github.com/angular-university/ngrx-course.git
    cd ngrx-course
    npm install
    
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




