# Doc_Scheduler

## Overview

This project is the frontend part of DocScheduler, an online appointment system! This section will guide you through the necessary steps to set up and run the frontend locally. The frontend is built using React.js and utilizes the react-bootstrap library for a responsive and modern UI.

## Prerequisites

Before you start, ensure that you have the following tools installed on your machine:

- Node.js: [https://nodejs.org/](https://nodejs.org/)
- npm (Node Package Manager): It comes with Node.js installation.

## Getting Started

Follow these steps to run the project locally:

1. **Clone the Repository:**

    ```bash
    git clone [repository_url]
    ```

2. **Navigate to the Frontend Directory:**

    ```bash
    cd frontend
    ```

3. **Install Dependencies:**

    ```bash
    npm install
    ```

    This command will install all the necessary dependencies for the project.

4. **Configure Environment Variables:**

    - Create a copy of the `.env.example` file and name it `.env`.
    - Modify the values in the `.env` file according to your environment if needed.

5. **Run the Application:**

    ```bash
    npm start
    ```

    This command will start the development server and open the application in your default web browser. You can access the application at [http://localhost:3000](http://localhost:3000).

## Available Scripts

In the project directory, you can run the following scripts:

- **`npm start`**: Runs the app in development mode.
- **`npm test`**: Launches the test runner in interactive watch mode.
- **`npm run build`**: Builds the app for production to the `build` folder.
- **`npm run eject`**: Ejects the app from Create React App configuration.

## Folder Structure

The project follows a standard React project structure. Key directories include:

- **`src`**: Contains the source code of the application.
- **`public`**: Contains the static assets and the main HTML file.
