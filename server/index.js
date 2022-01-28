
require('dotenv').config();
const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/", router);
const PORT = process.env.PORT || 8000;
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});

// async function main() {

let transporter = nodemailer.createTransport({
    service: "gmail",
    secure: false,
    port: 587,
    tls: { rejectUnauthorized: false },
    auth: {
        type: "OAuth2",
        user: process.env.user,
        pass: process.env.pass,
        clientId: process.env.OAUTH_CLIENTID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN,
    },
});

transporter.verify((err, success) => {
    err
        ? console.log(err)
        : console.log(`=== Server is ready to take messages: ${success} ===`);
});

// }