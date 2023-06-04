# JWT-Basic

This is an Express application where I have used JWT.
It allows user to register/login and once they register/login, they can access dashboard.

# Table of Contents

• Installation                                                                                                                                         
• Usage                                                                                                                                                 
• API Endpoints                                                                                                                                         
• Front End                                                                                                                                             
• Validation                                                                                                                                           
• Contributing                                                                                                                                         
• License                                                                                                                                               

# Installation

To get started with this project, follow the steps below:

**1.** Clone the repository:                                                                                                                           
git clone https://github.com/DawoodShah009/JWT-Basics.git                                                                                               

**2.** Install project dependencies:                                                                                                                   
npm install

## Available Scripts

In the project directory, you can run the following npm scripts:

### `npm install`

Installs all the project dependencies specified in the `package.json` file. This command should be run before running the project for the first time or when there are changes to the dependencies.

[Learn more about `npm install`](https://docs.npmjs.com/cli/v7/commands/npm-install)

### `npm start`

Starts the Node.js application. This command typically runs the `app.js` file or the entry point specified in the `package.json` file.

[Learn more about `npm start`](https://docs.npmjs.com/cli/v7/commands/npm-start)

### `npm start`

Starts the development server with hot reloading. I have used nodemon which keeps an eye over the changes made in the file and restart the server automatically.
An alternate for this command is 'npm run dev'
[Learn more about `npm run dev`](https://docs.npmjs.com/cli/v7/commands/npm-run-script)

# Usage

**LogIn**
Send a post request to /login with the username and password in the request body. The Api will create a JWT and will return it in response.
**Get user Data**
Send a Get request to /dashboard along with the jwt sent by the server to access the data. The data here is a lucky number, just to get my hands on JWT.

# API EndPoints

The following API endpoints are available:

• POST /login: Login as a user.

• GET /dashboard: Get user data.

# Front End

A simple webpage is provided in case you donot want to bother using PostMan or any other API testing tool. All the validation are implemented for the webpage as well.

# Validation

The application includes validation for user login and getting data. It ensures that the required fields are provided and validates the data format. If any validation errors occur, appropriate error messages will be returned.

# contributing

Contributions to this project are welcome. If you have any ideas, improvements, or bug fixes, feel free to submit a pull request. Please follow the existing code style and include tests for any new features.

# License

You are free to use, modify, and distribute the code.

## Additional Resources

For more information about npm and its commands, you can refer to the official npm documentation:

- [npm Documentation](https://docs.npmjs.com/)
