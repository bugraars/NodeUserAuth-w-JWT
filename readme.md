# 💡 User Auth with JWT

## 🧾 Description

This is a JavaScript project that uses Node.js and Express.js to build a RESTful API. The project includes user authentication, error handling, and data validation.

## ✨Technologies Used

- JavaScript: The main programming language used in this project.
- Node.js: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- Express.js: A fast, unopinionated, and flexible Node.js web application framework.
- Postman: A collaboration platform for API development.

## 🔌 Installation

- Clone the repository:

```sh
git clone <repository-url>

cd <project-directory>

npm install

npm start
```
## 🔵 Example User Informations:
```sh
[
  {
    "id": "12b92070-0f77-4e85-9228-0a3264f45127",
    "username": "bugraarslan",
    "email": "arslan@gmail.com",
    "password": "arslaN124",
    "stillEmployee": true,
    "role": "Full-stack Developer",
    "department": "IT Department",
    "age": 24,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJ1Z3JhYXJzbGFuIiwiaWF0IjoxNzA1NjcxMzk2fQ.WLw3oxogFDrFaY3nAlGxDS__bKC_jwoLcf8pu3Z91tE"
  }
]
```
- The server will start on http://localhost:3000. You can make requests to this server using tools like Postman.

## 🟢 Testing
The project includes a Postman collection that you can use to test the API endpoints. Import the assignment2.postman_collection.json file into Postman to use it.

## 🟢 app.js: 
This file is the main entry point for the application.

## 🟢 assignment2.postman_collection.json: 
This file contains a collection for Postman API tests.

## 🟢 package.json: 
This file defines the project's npm dependencies and scripts.

## 🟢 src/api/v1/controllers/authControllers/authControllers/authControllers.js: 
This file controls authentication related operations.

## 🟢 src/api/v1/controllers/userControllers/userControllers.js: 
This file controls user related operations.

## 🟢 src/api/v1/data/users.json: 
This file contains user data.

## 🟢 src/api/v1/middlewares/authMiddleware.js: 
This file defines the authentication middleware.

## 🟢 src/api/v1/middlewares/errorMiddleware.js: 
This file defines the error handling middleware.

## 🟢 src/api/v1/routes/authRoutes.js: 
This file defines authentication routes.

## 🟢 src/api/v1/routes/userRoutes.js: 
This file defines user routes.

## 🟢 src/api/v1/services/cryptPasswordServices.js: 
This file defines password encryption services.

## 🟢 src/api/v1/services/fieldCheckServices.js: 
This file defines the field check services.

## 🟢 src/api/v1/services/generateAccessTokenServices.js: 
This file defines the access token generation services.

## ⛔️ .gitignore: 
This file specifies files that git should not monitor.

## 🔐 License
MIT

```
