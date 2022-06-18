/**
 * 1. Create a connection function for mongodb
 * 2. Start a local mongodb server connection
 */
//MONGO_URI = 'mongodb://127.0.0.1:27017'

const mongoose = require('mongoose')
require('dotenv').config()
const { MONGO_URI } = process.env

//Create the connection function
// const connectDb = () => {
//     mongoose.connect(MONGO_URI, { 
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     })
//     .then(() => {
//         console.log('MongoDb connected...')
//         //Seed data
//     })
//     .catch((err) => {
//         console.error(err.message)
//         //Exit with Failure
//         process.exit(1)
//     })
// }

//Async mongoose connection
const connectDb = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log('MongoDb connected...')
        //Seed data
    } catch (err) {
        console.error(err.message)
        //Exit with Failure
        process.exit(1)
    }
}

module.exports = connectDb;