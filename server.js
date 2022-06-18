/**
 * 1. Create express server
 * 2. Connect to mongoDb
 * 3. Initialise express server
 * 4. Initialise express middleware
 * 5. Create a simple get request route
 * 6. Inject our routes
 * 7. Listen to app connection
 */

const express = require('express');
const connectDb = require('./db');
require('dotenv').config() //allows us to use the environment variables in .env file
const { PORT } = process.env

//Connect to db
connectDb()

//Initialise express
const app = express();

//Initialise express middleware
app.use(express.json({ extended: false }));

//Create basic express route
app.get('/', (req, res) => res.json({ message: "Welcome to Tutoring app!" }))

//PORT 
const port = process.env.PORT || PORT;

//Listen to connection
app.listen(port, () => console.log(`app running on port ${port}`));