const mongoose = require("mongoose"); 
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });
const app = require('./app');

const DB =process.env.DATABASE.replace(
    "<PASSWORD>",
     process.env.DATABASE_PASSWORD
);

mongoose.connect(DB)
    .then(() => console.log('DB is working!'));


const port = 8000;
const server = app.listen(port, () =>{
    console.log("Server runs");
});

process.on("unhandledRejection", err => {
    console.log("Unhandeled rejection!💥")
    console.log(err.name, err.message);
    server.close(() => {
        process.exit(1);
    });
});

process.on("uncaughtException", err => {
    console.log("Uncaught Exception!💥")
    console.log(err.name, err.message);
    server.close(() => {
        process.exit(1);
    });
});
