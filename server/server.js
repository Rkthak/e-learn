require("dotenv").config();
const cors = require("cors")
const express = require('express');
const Router = require("./router/authrouter");
const connectDB = require("./db/connectdb");
const errorMiddleware = require("./middleWares/errorMiddleware");

const corsOptions = {
    origin : "http://localhost:5173",
    methods : "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials : true
}

const app = express();

app.use(express.json());

app.use(cors(corsOptions))
app.use("/api/auth",Router);

app.use(errorMiddleware);

const Port = 5000;

connectDB().then(()=>{
    app.listen(Port, ()=>{
        console.log("port listening");
    })  
});