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

// let transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       type: "OAuth2",
//       user: process.env.user,
//       pass: process.env.pass,
//       clientId: process.env.OAUTH_CLIENTID,
//       clientSecret: process.env.OAUTH_CLIENT_SECRET,
//       refreshToken: process.env.OAUTH_REFRESH_TOKEN,
//     },
//    });