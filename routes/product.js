const express = require('express');
const controllers = require('../controllers');
const ProductController = controllers.ProductController;

const ProductRouter = express.Router();

ProductRouter.get('/', function (req, res) {
    ProductController.displayMessage();
    res.end();
});

module.exports = ProductRouter;