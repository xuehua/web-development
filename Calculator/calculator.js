const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
  console.log(req.body);
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;
  res.send("Result is " + result);
});

app.get("/bmiCalculator", function(req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function(req, res) {
  var weight = Number(req.body.weight);
  var height = Number(req.body.height);
  var result = Math.round(weight/(Math.pow(height, 2)));
  console.log("bmi is " + result);
  res.send("BMI is " + result);
});

app.listen(3000, function(){
  console.log("Wait at port 3000");
});
