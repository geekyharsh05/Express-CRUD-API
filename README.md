# Express and MongoDB CRUD API

This is a simple CRUD API built using Express.js and MongoDB. It allows you to perform basic CRUD operations (Create, Read, Update, Delete) on products.

## Table of Contents

- [Express and MongoDB CRUD API](#express-and-mongodb-crud-api)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Endpoints](#endpoints)
  - [Contributing](#contributing)

## Features

- Create a new product
- Read a list of products
- Update an existing product
- Delete a product

## Prerequisites

- Node.js (Version 18.17.1)
- MongoDB (Version 7.4.5)

## Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:geekyharsh05/Express-CRUD-API.git
   cd Express-CRUD-API
   ```

2. Install the dependencies:

    ```
    npm install
    ```

3. Set up your MongoDB connection by modifying the mongoose.connect line in app.js.

## Usage

1. Start the server:

    ```
    npm start
    ```

2. Access the API using http://localhost:4500 (or the port you've configured).

## Endpoints

- `POST /api/v1/product/new`: Create a new product.
- `GET /api/v1/products`: Fetch a list of all products.
- `PUT /api/v1/product/:id`: Update a product by ID.
- `DELETE /api/v1/product/:id`: Delete a product by ID.

## Contributing

Contributions are welcome! If you find any bugs or want to add new features, feel free to open an issue or submit a pull request.

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a pull request.


