const express = require("express");
const productsData = require("../productsData");

const router = express.Router();

module.exports = router.get("/", (req, res) => {
  let errors = [];

  if (!productsData.length) {
    errors.push(`products list is empty - products-service is down!`);
  }
  return res.send({ products: productsData, errors });
});

module.exports = router.get("/:id", (req, res) => {
  let errors = [];
  if (typeof req.params.id !== "string") {
    errors.push("id must be string type!");
  }
  let selectedProducts = productsData.filter(
    (item) => item.id == req.params.id
  );

  if (!selectedProducts.length) {
    errors.push(`the product with id : ${req.params.id} NOT EXIST!`);
  }
  let selected = selectedProducts[0];
  return res.send({ product: selected, errors });
});
module.exports = router.post("/", function (req, res, next) {
  const requestedData = req.body.ids;
  let resData = [];
  for (let i = 0; i < requestedData.length; i++) {
    const productDetails = productsData.filter(
      (item) => item.id ==requestedData[i]
    );
    resData.push(productDetails[0]);
  }

  console.log("reqIds:", requestedData);
  return res.send({ products: resData, errors:[] });
});
