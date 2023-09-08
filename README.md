# NodeJS_Crud
Design and develop a user management backend system using Express.js and MongoDB, allowing users to create, login account

### Prerequisites
Before you can run the User Management Backend API, you'll need the following:

Node.js and npm are installed on your machine.
MongoDB database. You can set up a local MongoDB instance or use a cloud-based service like MongoDB Atlas.

### Installation
1. Clone this repository:
```
git clone <repository-url>
```
2. Change to the project directory:
```
cd NodeJS_Curd_Assignment
```
3. Install the required npm packages:
```
npm install
```
### Environment Variables
Create a .env file in the root directory of your project and configure the following environment variables:
```
DB_URL=<your-mongodb-connection-uri>
PORT=<port-number>
```
Replace <your-mongodb-connection-uri> with your MongoDB connection URI, <your-secret-key> with a secure JWT secret key, and <port-number> with the desired port number for the server.

#### User Registration
* **Endpoint**: /API/registerUser
* **HTTP Method**: POST
* **Description**: Register a new user.
* **Request Body**:
```
{
  "name": "your_name"
  "email": "your_email",
  "password": "your_password"
}
```
**name**,**email** and **password** are required.
* **Response**:
HTTP Status: 201 Created
JSON Response:
```
{
  "message": "User created successfully"
}
```
#### User Login
* **Endpoint**: /API/loginUser
* **HTTP Method**: POST
* **Description**: Log in as an existing user and obtain an authentication token.
* **Request Body**:
```
{
  "email": "your_email",
  "password": "your_password"
}
```
* **email** and **password** are required.
* **Response**:
* HTTP Status: 200 OK
* JSON Response:
```
{
  "message": "User Login Successfully"
}
```
* **Error Handling**:
* If the user is already registered and trying to register again with the same email then validation errors in the request, the API will respond with a 404 not found status and provide details about the validation errors.
```
{
message: "User already created with his email"
}
```
* If the user is given a password of less than 8 characters while registering then validation errors in the request, the API will respond with a 501 Not implemented status and provide
```
{
    "success": false,
    "message": "RegisterUser validation failed: password: Path `password` (`qwe`) is shorter than the minimum allowed length (8)."
}
```
* If the user is not registered and trying to log in then validation errors in the request, the API will respond with a 404 not found status and provide
```
{
 message: "User Not Register"
}
```
* If the user is not given the correct password and is trying to log in then validation errors in the request, the API will respond with a 401 not authorized status and provide
```
{
message: "Please Enter Correct Password"
}
```
* The API will respond with a 501 Internal Server Error status for server errors.
**Testing**
You can test the API using tools like Postman or by writing automated tests. Please make sure that you have valid registration and login credentials for testing.




