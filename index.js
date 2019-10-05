//jshint esversion: 6

const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const fs = require("fs");
const {JSDOM} = require("jsdom");

const app = express();
app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}));

const htmlSource = fs.readFileSync("index.html", "utf8");
const jsdom = new JSDOM(htmlSource);

//Set window and document
const { window } = jsdom;
const { document } = window;
//
global.window = window;
global.document = document;

const $ = global.jQuery = require('jquery');

console.log(`jQuery ${jQuery.fn.jquery} working! Yay!!`);

$(".Skills1").addClass("testClass");



app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.listen(3000, function() {
  console.log("server is running on port 3000");
});
