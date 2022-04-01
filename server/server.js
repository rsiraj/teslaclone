const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
require("dotenv").config();

const app = express();
const SQL_PORT = process.env.SQL_PORT;
const SQL_PASSWORD = process.env.SQL_PASSWORD;

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: SQL_PASSWORD,
  database: "tesla_clone",
});

db.connect((err) => {
  if (err) throw err;
  console.log("Connection Sucessful");
});

app.get("/models", (req, res) => {
  db.query("SELECT * FROM tesla_cars", (err, response) => {
    res.status(200).json(response);
  });
});

app.get("/model3", (req, res) => {
  db.query("SELECT * FROM tesla_cars", (err, response) => {
    res.status(200).json(response);
  });
});

app.get("/modelx", (req, res) => {
  db.query("SELECT * FROM tesla_cars", (err, response) => {
    res.status(200).json(response);
  });
});

app.get("/modely", (req, res) => {
  db.query("SELECT * FROM tesla_cars", (err, response) => {
    res.status(200).json(response);
  });
});

app.get("/solarroof", (req, res) => {
  db.query("SELECT * FROM tesla_cars", (err, response) => {
    res.status(200).json(response);
  });
});

app.get("/solarpanels", (req, res) => {
  db.query("SELECT * FROM tesla_cars", (err, response) => {
    res.status(200).json(response);
  });
});

app.listen(SQL_PORT, () => {
  console.log(`Listening on port ${SQL_PORT}`);
});
