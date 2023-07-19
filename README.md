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

<img src="https://github.com/madisondegrezia/Assignment10/assets/89614960/79c3f23a-c9f3-47d1-82e5-9f06faa9933c" width=60% height=60%>

The above image shows the message and status code that is displayed when an unauthorized user tries to access a protected route.

<img src="https://github.com/madisondegrezia/Assignment10/assets/89614960/187e4daf-57bd-4f04-9d9f-7a6f6f73e1bb" width=60% height=60%>

The above image shows the POST request to login a user.

<img src="https://github.com/madisondegrezia/Assignment10/assets/89614960/4e7f8d1d-a42e-4a6c-ba38-a10af516500b" width=60% height=60%>

The above image shows the DELETE request to logout a user.

<img src="https://github.com/madisondegrezia/Assignment10/assets/89614960/15a4d05e-1f27-46ea-93f7-6863ba32fe77" width=60% height=60%>

The above image shows the GET request to retrieve all posts after logging into an account.

<img src="https://github.com/madisondegrezia/Assignment10/assets/89614960/9746dd0c-84e7-4c19-97f2-031a379c611b" width=60% height=60%>

The above images shows the GET request for a specific post by ID after logging into an account.

<img src="https://github.com/madisondegrezia/Assignment10/assets/89614960/b82e7e0e-a269-41ac-ac59-f4b750273a46" width=60% height=60%>

The above image shows the POST request to create a new post as an authorized user.

<img src="https://github.com/madisondegrezia/Assignment10/assets/89614960/92dc2343-abb1-4b7a-8190-082a4afecc53" width=60% height=60%>

The above image shows the PATCH request to edit a post that the logged in user created.

<img src="https://github.com/madisondegrezia/Assignment10/assets/89614960/626b7887-f9f4-4369-91d1-85aab43d389e" width=60% height=60%>

The above image shows the unsuccessful PATCH request to edit a post that the logged in user did not create.

<img src="https://github.com/madisondegrezia/Assignment10/assets/89614960/3247bc1c-9760-4fad-957d-753a2c23f666" width=60% height=60%>

The above image shows the unsuccessful DELETE request to delete a post that the logged in user did not create.

<img src="https://github.com/madisondegrezia/Assignment10/assets/89614960/11482b97-b094-4509-9692-4bacc86882c0" width=60% height=60%>

The above image shows the DELETE request to delete a post that the logged in user created.

<img src="https://github.com/madisondegrezia/Assignment10/assets/89614960/84974de5-c019-4ca4-b031-2cc209c7db0b" width=60% height=60%>

The above image shows the unsuccessful PATCH request to edit a comment that the logged in user did not create.

<img src="https://github.com/madisondegrezia/Assignment10/assets/89614960/d995e2f2-211d-44f5-a49c-10050772f605" width=60% height=60%>

The above image shows the unsuccessful DELETE request to delete a comment that the logged in user did not create.

<img src="https://github.com/madisondegrezia/Assignment10/assets/89614960/7abefc72-6b9f-4c07-856b-af33d214a58f" width=60% height=60%>

The above image shows the POST request to add a new comment as an authorized user.

<img src="https://github.com/madisondegrezia/Assignment10/assets/89614960/48738d16-0bbc-4f43-8d8a-0c1965d2f846" width=60% height=60%>

The above image shows the PATCH request to edit a comment that the logged in user added.

<img src="https://github.com/madisondegrezia/Assignment10/assets/89614960/8fd20533-f2b0-48a1-9ee4-34222a732bf9" width=60% height=60%>

The above image shows the DELETE request to delete a comment that the logged in user added.



