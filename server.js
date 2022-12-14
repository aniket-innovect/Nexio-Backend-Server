"use strict";
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require("http");

const nexioRouter = require('./routes/nexio-routes')

const port = 3100;


app.get("/healthcheck", function (req, res, next) {
    res.json({ message: "success" });
});

app.use(cors());
app.options("*", cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/nexio/pay/v3", nexioRouter);

app.listen(port, () => console.log(`App listening at http:localhost: ${port}!`))


