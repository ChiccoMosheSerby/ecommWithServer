const express = require("express");
const productsData = require("../productsData");

const router = express.Router();

module.exports = router.get("/", (req, res) =>
  res.send({ products:productsData })
);

module.exports = router.get("/:id", (req, res) => {
  let selectedProducts = productsData.filter((item) => item.id == req.params.id);
let selected = selectedProducts[0]
  return res.send({ product:selected });
});
