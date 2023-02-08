const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res, next) => {
  res.send("Hello");
});

app.post("/", (req, res, next) => {
  console.log("request", req.body);
  res.send("ok");
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});