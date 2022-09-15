// import library  or package
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
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { title: "SaCodeTail" });
});
app.get("/docs", (req, res) => {
  res.render("docs", { title: "Docs - SaCodeTail" });
});
app.get("/donasi", (req, res) => {
  res.render("donasi", { title: "Donasi - SaCodeTail" });
});
app.get("/about", (req, res) => {
  res.render("about", { title: "About - SaCodeTail" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});