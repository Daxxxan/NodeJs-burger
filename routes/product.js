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

ProductRouter.get('/price/:price', function (req, res) {
   const price = req.params.price;

   ProductController.getProductByPrice(price)
   .then((product) => {
        res.json(product);
   })
   .catch((err) => {
        console.log(err);
        res.status(501).end();
   });
});

ProductRouter.get('/cal/:cal', function (req, res) {
    const cal = req.params.cal;

    ProductController.getProductByCal(cal)
    .then((product) => {
        res.json(product);
    })
    .catch((err) => {
        console.log(err);
        res.status(501).end();
    });
});

ProductRouter.get('/size/:size', function (req, res) {
    const size = req.params.size;

    ProductController.getProductBySize(size)
    .then((product) => {
        res.json(product);
    })
    .catch((err) => {
        console.log(err);
        res.status(501).end();
    });
});

module.exports = ProductRouter;