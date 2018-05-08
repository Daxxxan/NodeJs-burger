const express = require('express');
const controllers = require('../controllers');
const bodyParser = require('body-parser');
const ProductController = controllers.ProductController;

const ProductRouter = express.Router();
ProductRouter.use(bodyParser.json());

ProductRouter.post('/', function (req, res) {
    const name = req.body.name;
    const cal = req.body.cal;
    const highlight = req.body.highlight;
    const price = req.body.price;
    const size = req.body.size;

    if(name === undefined || cal === undefined || highlight === undefined || price === undefined || size === undefined){
        res.status(400).end();
        return;
    }
    ProductController.setProduct(name, cal, highlight, price, size)
    .then((successfullyAdd) => {
        res.status(201).json(successfullyAdd);
        res.end();
    })
    .catch((err) => {
        console.log(err);
        res.status(500).end();
    });
});

ProductRouter.get('/:name', function (req, res) {
    const name = req.params.name;

    ProductController.getProductByName(name)
    .then((product) => {
        res.json(product);
    })
    .catch((err) => {
        console.log(err);
        res.status(501).end();
    });
});

module.exports = ProductRouter;