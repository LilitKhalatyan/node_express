import express from "express";

// import path from "path";
// //read from file
// app.get("/", (req, res) => {
//   res.sendFile(path.resolve("public/index.html"));
// });

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  req.redirect("/index.html");
});

// JSON
app.get("/json", (req, res) => {
  res.send({
    name: "Joe",
  });
});

//text
app.get("/hello", (req, res) => {
  res.send("hello");
});

//text
app.get("/bye", (req, res) => {
  res.send("byee");
});

app.listen(3001);
