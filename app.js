const express = require("express");

const app = express();
const port = 8000;
const connectDB = require("./DB/connect");

// dontenv
require("dotenv").config();

// Router
const userRouter = require("./Routes/user");

// Middleware
app.use((req, res, next) =>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Origin', '*')

    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'PUT, POST, DELETE, GET')
        return res.status(200).json({})
    }

    next();
});

app.use(express.json());

// Route
app.use("/api/v1/users", userRouter);

// Connection
const start = async () => {
    try {
        await connectDB(process.env.MONGO_CONNECT);
        app.listen(port, (req, res) => {
            console.log("You are listening to port:", port);
        });
    } catch (error) {
        console.log(error);
    }
}

start();