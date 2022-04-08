const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const SQL_PORT = process.env.SQL_PORT;
const SQL_PASSWORD = process.env.SQL_PASSWORD;

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
  host: "tesla-clone.ctul2xxq1xtc.us-east-2.rds.amazonaws.com",
  port: 3306,
  user: "admin",
  password: SQL_PASSWORD,
  database: "tesla_clone",
});

db.connect((err) => {
  if (err) throw err;
  console.log("Connection Sucessful");
});

app.get("/", (req, res) => {
  db.query("SELECT * FROM tesla_landing", (err, response) => {
    if (err) res.json({ message: `https://http.cat/404` });
    res.status(200).json(response);
  });
});

app.get("/models", (req, res) => {
  db.query("SELECT * FROM tesla_products", (err, response) => {
    if (err) res.json({ message: ` https://http.cat/404` });
    res.status(200).json(response);
  });
});

app.get("/model3", (req, res) => {
  db.query("SELECT * FROM tesla_products", (err, response) => {
    if (err) res.json({ message: ` https://http.cat/404` });
    res.status(200).json(response);
  });
});

app.get("/modelx", (req, res) => {
  db.query("SELECT * FROM tesla_products", (err, response) => {
    if (err) res.json({ message: ` https://http.cat/404` });
    res.status(200).json(response);
  });
});

app.get("/modely", (req, res) => {
  db.query("SELECT * FROM tesla_products", (err, response) => {
    if (err) res.json({ message: ` https://http.cat/404` });
    res.status(200).json(response);
  });
});

app.get("/solarroofs", (req, res) => {
  db.query("SELECT * FROM tesla_solar", (err, response) => {
    if (err) res.json({ message: ` https://http.cat/404` });
    res.status(200).json(response);
  });
});

app.get("/solarpanels", (req, res) => {
  db.query("SELECT * FROM tesla_solar", (err, response) => {
    if (err) res.json({ message: ` https://http.cat/404` });
    res.status(200).json(response);
  });
});

app.get("/signin", (req, res) => {
  db.query("SELECT * FROM tesla_contact", (err, response) => {
    if (err) res.json({ message: ` https://http.cat/404` });
    res.status(200).json(response);
  });
});

app.post("/contact", (req, res) => {
  const fName = req.body.fName;
  const lName = req.body.lName;
  const email = req.body.email;
  const phone = req.body.phone;
  const message = req.body.message;
  db.query(
    "INSERT INTO tesla_form (first_name, last_name, email, phone_number, message)VALUES (?,?,?,?,?)",
    [fName, lName, email, phone, message],
    (err, response) => {
      if (err) res.json({ message: ` https://http.cat/404` });
    }
  );
});

app.listen(SQL_PORT, () => {
  console.log(`Listening on port ${SQL_PORT}`);
});
