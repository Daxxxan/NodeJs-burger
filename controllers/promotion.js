const PromotionController = function () {};
const ModelIndex = require('../models');
const Promotion = ModelIndex.Promotion;
const Product = ModelIndex.Product;
const Sequelize = require('Sequelize');

PromotionController.setProductPromotion = function(price, startDate, endDate, id){
    return Promotion.create({
        price: price,
        startDate: startDate,
        endDate: endDate,
        product_id: id
    });
}

PromotionController.setMenuPromotion = function(price, startDate, endDate, id){
    return Promotion.create({
        price: price,
        startDate: startDate,
        endDate: endDate,
        menu_id: id
    });
}

PromotionController.getPromotion = function(){
    const options = {
        include: [{
            model: ModelIndex.Product
        }, {
            model: ModelIndex.Menu
        }]
    };
    return Promotion.findAll(options);
}

PromotionController.getPromotionByProduct = function(id){
    const options = {
        include: [{
            model: ModelIndex.Product,
            where: {
                id: id
            }
        }]
    };
    return Promotion.findAll(options);
}

PromotionController.getPromotionByMenu = function(id){
    const options = {
        include: [{
            model: ModelIndex.Menu,
            where: {
                id: id
            }
        }]
    };
    return Promotion.findAll(options);
}

PromotionController.getPromotionByStartDate = function(startDate){
    const options = {
        include: [{
            model: ModelIndex.Product,
        }, {
            model: ModelIndex.Menu,
        }], where: {
            startDate: startDate
        }
    };
    return Promotion.findAll(options);
}

PromotionController.getPromotionByEndDate = function(endDate){
    const options = {
        include: [{
            model: ModelIndex.Product,
        }, {
            model: ModelIndex.Menu,
        }], where: {
            endDate: endDate
        }
    };
    return Promotion.findAll(options);
}

PromotionController.setPromotionPrice = function(id, price){
    return Promotion.update({
        price: price
    }, {
        where: {
            id: id
        }
    })
};

PromotionController.deletePromotion = function(id){
    return Promotion.destroy({
        where: {
            id: id
        }
    })
};

module.exports = PromotionController;
