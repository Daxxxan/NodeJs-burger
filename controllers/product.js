const ProductController = function () {};
const ModelIndex = require('../models');
const Product = ModelIndex.Product;

ProductController.setProduct = function(name, cal, highlight, price, size) {
    return Product.create({
        name: name,
        cal: cal,
        highlight: highlight,
        price: price,
        size: size
    });
};

ProductController.displayMessage = function () {
    console.log('Page reservée à l\'affichage des produits');
};

module.exports = ProductController;