const { urlencoded } = require("express");
const express = require("express");
const cors = require("cors");
require('dotenv').config();


const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: false }));

//routes
app.use("/public", express.static("./uploads/images"));
app.use(require("./routes/index"));

const port = 4100;
app.listen(port);
console.log(`Server on port ${port}`);
