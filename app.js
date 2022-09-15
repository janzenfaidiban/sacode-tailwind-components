// import library  or package
const http = require("http");
const express = require("express");
const port = "3000";
var fs = require("fs");
const app = express();

// config static file
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));
app.use("/img", express.static(__dirname + "public/img"));

// config view engine
app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  //   res.render("index");
  res.render("index", { title: "Home" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
