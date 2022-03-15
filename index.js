const express = require("express");
const path = require("path");

const app = express();
const bodyParser = require("body-parser");

const cors = require("cors");
app.use(cors());
// app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const products = require("./Routes/products");
app.use("/products", products);

let port = process.env.PORT || 2000;
app.listen(port, function () {
  console.log(
    "-------------------------> server conected to port: ",
    port,
    "!<---------------------------------------------------------"
  );
});
