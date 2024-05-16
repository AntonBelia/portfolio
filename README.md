# Full-Stack Project Portfolio: React, Node.js, Express, and SQL

## Project Description

This project is a full-stack application that combines both client-side and server-side components. The client-side is implemented using the React library, responsible for rendering the user interface and interacting with it. The server-side is built on Node.js and Express, handling client requests and database interactions. SQL is used as the database technology.

The project is deployed on the Google Cloud Platform (GCP), providing high availability and scalability. Various GCP services are utilized to ensure reliability and security, such as Google App Engine, Google Cloud SQL.

The working instance is deployed on [GCP](https://client-dot-belia-staging.uw.r.appspot.com/)

## Functionality

This application demonstrates the developer's skills in key aspects of web development:

 - Creating and interacting with a database using SQL.
 - Developing a user interface with React library.
 - Building the server-side of the application using Node.js and Express.
 - Testing code using Cypress, and React Testing Library.
 - Deployment and management of the application on the Google Cloud Platform.

## Environment Requirements

Before running the project, ensure the following components are installed:

 - Node.js and npm (for working with packages and dependencies)
 - SQL database (e.g., MySQL or PostgreSQL)
 - Code editor for making changes to the project

## Deployment Instructions

 - 1.Clone this repository to your local machine using the command git clone.
 - 2.Navigate to the project folder with cd project-name.
 - 3.Install dependencies for the client-side using npm install.
 - 4.Build the client-side application using npm run build.
 - 5.Install dependencies for the server-side using cd server followed by npm install.
 - 6.Additionally, ensure to set up a database on Google Cloud Platform (GCP) and configure the server-side with your database credentials for full deployment functionality.
 - 7.Start the server-side by running npm start in the server folder.
 - 8.Navigate back to the root folder of the project and start the client-side using npm start.
 - 9.Open a web browser and go to http://localhost:3000 to view the application.
 - 10.Navigate back to the root folder of the project and deploy the application to Google Cloud Platform (GCP) by executing the command gcloud app deploy client/clientAppEngine.yaml server/serverAppEngine.yaml.

## Testing

The project includes built-in tests to ensure its functionality correctness. To run the tests, use the following commands:

 - For running Cypress tests: npx cypress open
 - For running React Testing Library tests: npm run test
