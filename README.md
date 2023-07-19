# Blogging_Platform


## Table of contents  
* [Objective](#Objective)
* [Tables](#Tables)
* [Installation](#Installation)
* [Usage](#Usage)
* [Postman](#Postman)
* [Screenshots](#Screenshots)
  
## Objective

To create a CRUD web application for a blogging platform, incorporating database relationships using Sequelize, and implementing user authentication and authorization.

## Tables

* Users
  * id (primary key)
  * name (string)
  * email (string)
  * password (string)
  * createdAt (datetime)
  * updatedAt (datetime)
* Posts
  * id (primary key)
  * title (string)
  * content (text)
  * createdAt (datetime)
  * updatedAt (datetime)
  * UserId (foreign key)
* Comments
  * id (primary key)
  * message (text)
  * createdAt (datetime)
  * updatedAt (datetime)
  * UserId (foreign key)
  * PostId (foreign key)

## Installation

Clone the repository to your local machine

Open a terminal and navigate to the project directory

Install the dependencies by running the following command:

```
npm install
```
Make sure the .env file is set up with the correct variables (DB_USER, DB_PASSWORD, DB_NAME, and DB_HOST) and is located in the root of our project directory. The .env file is not committed to version control, so you'll need to create a new one.
```
DB_USER=
DB_HOST=
DB_NAME=
DB_PASSWORD=
DB_PORT=
```
Now, when we run our application in development mode, Sequelize will use the credentials provided in our environment variables to connect to our database.

## Usage

To start the application, run the following commands in your terminal to start the two development servers for the backend and frontend:

```
cd blogging-platform-backend
npm start
```
```
cd blogging-platform-frontend
npm run dev
```
This will start the server on port 4000 by default. You can access the API using any REST client, such as a ReactJS app, Postman or cURL.

The following endpoints are available:

- GET /api/posts - Retrieve a list of all posts.
- GET /api/posts/:id - Retrieve a specific post by ID.
- POST /api/posts - Create a new post.
- PATCH /api/posts/:id - Update a specific post by ID. 
- DELETE /api/posts/:id - Delete a specific post by ID.
  
- GET /api/comments/:id - Retrieve a specific comment by ID.
- GET /api/posts/:id/comments - Retrieve all comments for a specific post.
- POST /api/comments - Create a new comment.
- PATCH /api/comments/:id - Update a comment. 
- DELETE /api/comments/:id - Delete a comment.

- POST /api/auth/signup
- POST /api/auth/login
- DELETE /api/auth/logout

## Postman
Link to Postman Collection: https://www.postman.com/mdegrezia/workspace/blogging-platform-api/collection/28381226-12442454-c3bd-41db-93b0-cc5b5570ce7e?action=share&creator=28381226

## Screenshots
If a user is not logged in, none of the CRUD operations for posts or comments would be successful, ensuring that only authenticated users can access protected routes.

<img src="https://github.com/madisondegrezia/Blogging_Platform/assets/89614960/ee09d1ee-bd6e-4c0a-9690-6fd5e253ddc4" width=60% height=60%>

The above image shows the login page that is displayed and prompts the user to enter their credentials.

<img src="https://github.com/madisondegrezia/Blogging_Platform/assets/89614960/48042c2e-506d-4375-97f2-d64547a65bb9" width=60% height=60%>

The above images shows the error message displayed when a user inputs invalid credentials.

<img src="https://github.com/madisondegrezia/Blogging_Platform/assets/89614960/c6c336b0-d59b-4be8-a62a-7ab08fb64616" width=60% height=60%>

The above image shows the form displayed if the user would like to add a new blog post.

<img src="https://github.com/madisondegrezia/Blogging_Platform/assets/89614960/f7f38ef2-c840-43c2-be65-084397bd395d" width=60% height=60%> 

The above image shows the form displayed if the user would like to edit a pre-existing blog post.



