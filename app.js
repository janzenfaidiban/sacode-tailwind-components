// import library  or package
const data = require("./data.json");
const express = require("express");
const port = "3000";
var fs = require("fs");
const app = express();

// const data = [
//   {
//     id: 1,
//     name: "Janzen Faidiban",
//     job: "Developer and UI/UX",
//     sosmed: {
//       facebook: "https://facebook.com/janzenfaidiban",
//       instagram: "https://instagram.com/janzenfaidiban",
//       twitter: "https://twitter.com/janzenfaidiban",
//     },
//     image: "https://avatars.githubusercontent.com/u/45115034?v=4",
//   },
//   {
//     id: 2,
//     name: "Zonggonau",
//     job: "Developer and UI/UX",
//     sosmed: {
//       facebook: "https://facebook.com/janzenfaidiban",
//       instagram: "https://instagram.com/janzenfaidiban",
//       twitter: "https://twitter.com/janzenfaidiban",
//     },
//     image: "https://avatars.githubusercontent.com/u/5399749?v=4",
//   },
//   {
//     id: 3,
//     name: "Antheiz",
//     job: "Developer and UI/UX",
//     sosmed: {
//       facebook: "https://facebook.com/janzenfaidiban",
//       instagram: "https://instagram.com/janzenfaidiban",
//       twitter: "https://twitter.com/janzenfaidiban",
//     },
//     image: "https://avatars.githubusercontent.com/u/45439030?v=4",
//   },
// ];

// config static file
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));
app.use("/img", express.static(__dirname + "public/img"));

// config view engine
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { title: "SaCodeTail", data: data.data });
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
