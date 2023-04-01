require("dotenv").config();
const express = require("express");

const path = require("path");

const app = express();

const router = require("./router");

app.disable("x-powered-by");

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use(express.static(path.join(__dirname, "..", "public")));

app.use(router);

module.exports = app;
