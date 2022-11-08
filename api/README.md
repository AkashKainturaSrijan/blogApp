# This application contains:

### BackEnd

## APIs -> services controllers interface using NestJS

### FrontEnd

## Angular, Angular Material and Angular forms with Upload and CRUD Operations


### Testing

## using Cypress and Mocha Frameworks

### Install the application 

 - Clone the Repo 

 - start the backend in dev mode after adding the .env file

 `cd api`
 `npm install`
 `npm run start:dev`

 - start the frontend  (have to add the .env file also)

 `cd frontend`
 `npm install`
 `ng serve`

 - start the e2e generating report (it's only for the html form)

`npm run cypress:report`


# Instructions to run the Project 

## With Docker
Command:  
`docker-compose up`  
and then visit `localhost:4200`

### Tipps & Tricks for docker
If you need to remove docker images or containers you can use one of the following commands.

Command to remove all images:  
`docker rmi -f $(docker images -a -q)`

Command to remove all containers:  
`docker rm -vf $(docker ps -a -q)`


## Without Docker
### 2. Add an environment file to the project
Add a .env file in the api folder (at the top of your api folder, so nest can find it)  
 - add your own DATABASE_URL in the .env file
 - add your own JWT_SECRET in the .env file