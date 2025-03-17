# Library API

This project is a backend API built with Express for managing a library's book collection. It supports full CRUD (Create, Read, Update, Delete) operations on books. The API validates incoming data and handles errors with appropriate HTTP status codes. The code is organized in a modular fashion, separating routes, controllers, and the main server configuration.

## Project Overview

The Library API provides the following endpoints:

- **GET /books**: Retrieve a list of all books.
- **GET /books/:id**: Retrieve detailed information for a specific book using its `id`.
- **POST /books**: Add a new book to the collection. The request must include `title`, `author`, and `genre`.
- **PUT /books/:id**: Update an existing book's details. All fields (`title`, `author`, and `genre`) are required.
- **DELETE /books/:id**: Remove a book from the collection.

The API uses Express middleware for JSON parsing and includes proper error handling for bad requests (400) and not found resources (404).

## Setup Instructions

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v14+ recommended)
- [npm](https://www.npmjs.com/)

### Clone the Repository

git clone https://github.com/bitvalo34/library-api

cd library-api

### Install Dependencies

Install the necessary packages:

npm install

### Run the Server

You can start the server in production mode:

npm start

The server listens on port 3000 by default (or the port specified in the PORT environment variable).

### Usage Instructions

**Endpoints**

GET /books

- Description: Retrieve the list of all books.

- Example Response:

[]

POST /books

- Description: Add a new book to the library. Requires title, author, and genre.

- Example Request Body:

{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "genre": "Classic"
}

- Example Response:

{
  "id": 1,
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "genre": "Classic"
}

GET /books/:id

- Description: Retrieve details for a specific book by its id.

- Example Response:

{
  "id": 1,
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "genre": "Classic"
}

PUT /books/:id

- Description: Update an existing book's details. All fields are required.

- Example Request Body:

{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "genre": "Modern Classic"
}

- Example Response:

{
  "id": 1,
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "genre": "Modern Classic"
}

DELETE /books/:id

- Description: Remove a book from the library.

- Example Response:

{
  "id": 1,
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "genre": "Modern Classic"
}

**Postman Collection**
A Postman collection has been created to help you test the API endpoints.

Importing the Postman Collection
1. Open Postman.
2. Click on the Import button.
3. Select the Library_API_Collection.json file located in the /postman folder of this repository.
4. The collection named Library API Collection will be imported, containing all endpoint requests with descriptions and example responses.

### CodeSandbox Live Preview
A live preview of the project is available on CodeSandbox: [CodeSandbox Live Preview](https://codesandbox.io/p/sandbox/y6s7dj)

### Project Structure

library-api/
├── controllers/
│   └── bookController.js    # Contains CRUD operations and validation logic.
├── routes/
│   └── bookRoutes.js        # Defines API routes and maps them to controller functions.
├── index.js                 # Main server file that sets up Express, middleware, routes, and error handling.
├── package.json             # Contains project metadata and scripts.
├── README.md                # Project documentation.
└── postman/
    └── Library_API_Collection.json  # Postman collection for API validation.