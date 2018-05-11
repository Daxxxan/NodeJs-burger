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

ProductController.setProductName = function (oldName, newName) {
    return Product.update({
        name: newName
    }, {
        where: {
            name: oldName
        }
    })
};

ProductController.setProductPrice = function (name, price){
    return Product.update({
        price: price
    }, {
        where: {
            name: name
        }
    })
};

ProductController.setProductCal = function(name, cal){
    return Product.update({
        cal: cal
    }, {
        where: {
            name: name
        }
    })
};

ProductController.setProductSize = function(id, size){
    return Product.update({
        size: size
    }, {
        where: {
            id: id
        }
    })
};

ProductController.setProductHighLight = function(id){
  return Product.update({
      highlight: 1
  }, {
      where: {
          id: id
      }
  })
}

ProductController.getAllProduct = function(){
    const options = {
        include: [{
            model: ModelIndex.Promotion,
            as: "ProductsPromotions"
        }]
    }
    return Product.findAll(options);
}

ProductController.getProductByName = function (name) {
    const options = {
        include: [{
            model: ModelIndex.Promotion,
            as: "ProductsPromotions"
        }],
        where: {
            name: name
        }
    };
    return Product.findAll(options);
};

ProductController.getProductByPrice = function (price) {
    const options = {
        include: [{
            model: ModelIndex.Promotion,
            as: "ProductsPromotions"
        }],
        where: {
            price: price
        }
    };
    return Product.findAll(options);
};

ProductController.getProductByCal = function (cal) {
    const options = {
        include: [{
            model: ModelIndex.Promotion,
            as: "ProductsPromotions"
        }],
        where: {
            cal: cal
        }
    };
    return Product.findAll(options);
};

ProductController.getProductBySize = function (size) {
    const options = {
        include: [{
            model: ModelIndex.Promotion,
            as: "ProductsPromotions"
        }],
        where: {
            size: size
        }
    };
    return Product.findAll(options)
};

ProductController.getProductByHighlight = function (){
    const options = {
        include: [{
            model: ModelIndex.Promotion,
            as: "ProductsPromotions"
        }],
        where : {
            highlight: 1
        }
    };
    return Product.findAll(options);
};

ProductController.displayMessage = function () {
    console.log('Page reservée à l\'affichage des produits');
};

module.exports = ProductController;
