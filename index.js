 
const express = require("express");
const cors = require("cors");
 
const app = express();
app.use(cors());

//lo pongo en una variable para el deploy
const port = process.env.PORT || 3000;

const about = require("./api/proyects.json");
const proyects = require("./api/about.json");


app.get("/", (req, res) => {
  res.send("Deploy");
});

app.get("/about", (req, res) => {
  res.json(about);
});

app.get("/proyects", (req, res) => {
  res.json(proyects);
});



app.listen(port, () => {
  console.log("working");
});
