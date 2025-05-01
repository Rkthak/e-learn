const express = require("express");
const cors = require("cors");
const app = express();

var corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

  app.use(cors(corsOptions))

const Route = require("../router/router");

app.use(express.json());

app.use("/api/data",Route);

const PORT = 3000;

app.listen(PORT,()=>{
    console.log(`listening port at ${PORT}`);
});