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
  host: "tesla-clone.ctul2xxq1xtc.us-east-2.rds.amazonaws.com",
  port: 3306,
  user: "admin",
  password: SQL_PASSWORD,
  database: "tesla_clone",
});
//comment2

db.connect((err) => {
  if (err) throw err;
  console.log("Connection Sucessful");
});

app.get("/", (req, res) => {
  db.query("SELECT * FROM tesla_cars", (err, response) => {
    if (err) res.json({ message: `https://http.cat/404` });
    res.status(200).json(response);
  });
});

app.get("/models", (req, res) => {
  db.query("SELECT * FROM tesla_cars", (err, response) => {
    if (err) res.json({ message: ` https://http.cat/404` });
    res.status(200).json(response);
  });
});

app.get("/model3", (req, res) => {
  db.query("SELECT * FROM tesla_cars", (err, response) => {
    if (err) res.json({ message: ` https://http.cat/404` });
    res.status(200).json(response);
  });
});

app.get("/modelx", (req, res) => {
  db.query("SELECT * FROM tesla_cars", (err, response) => {
    if (err) res.json({ message: ` https://http.cat/404` });
    res.status(200).json(response);
  });
});

app.get("/modely", (req, res) => {
  db.query("SELECT * FROM tesla_cars", (err, response) => {
    if (err) res.json({ message: ` https://http.cat/404` });
    res.status(200).json(response);
  });
});

app.get("/solarroof", (req, res) => {
  db.query("SELECT * FROM tesla_cars", (err, response) => {
    if (err) res.json({ message: ` https://http.cat/404` });
    res.status(200).json(response);
  });
});

app.get("/solarpanels", (req, res) => {
  db.query("SELECT * FROM tesla_cars", (err, response) => {
    if (err) res.json({ message: ` https://http.cat/404` });
    res.status(200).json(response);
  });
});

app.listen(SQL_PORT, () => {
  console.log(`Listening on port ${SQL_PORT}`);
});
