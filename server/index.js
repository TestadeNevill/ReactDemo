const express = require("express");
const router = express.Router();
const cors = require("cors");
// const nodemailer = require("nodemailer");
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
const PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});

