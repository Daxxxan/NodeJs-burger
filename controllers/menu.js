const MenuController = function () {};
const ModelIndex = require('../models');
const Menu = ModelIndex.Menu;
const Product = ModelIndex.Product;
const Promotion = ModelIndex.Promotion;

MenuController.setMenu = function (name, price, size, idProducts) {
    return Menu.create({
        name: name,
        price: price,
        size: size
    }).then(function(menu) {
        idProducts.forEach(function (elem) {
            menu.addProduct(elem);
        });
    })
};


MenuController.setName = function(oldName, newName){
    return Menu.update({
        name: newName
    },{
        where: {
            name: oldName
        }
    })
};

MenuController.setPrice = function(name, newPrice){
    return Menu.update({
        price: newPrice
    },{
        where: {
            name: name
        }
    })
};

MenuController.setSize = function(id, newSize){
    return Menu.update({
        size: newSize
    },{
        where: {
            id: id
        }
    })
};

MenuController.getAllMenu = function(){
    const options = {
        include: [{
            model: ModelIndex.Product
        }, {
            model: ModelIndex.Promotion,
            as: "MenusPromotions"
        }]
    }
    return Menu.findAll(options);
}

MenuController.getMenu = function(id){
    const where = {
        id: id
    }
    const options = {
        include: [{
            model: ModelIndex.Product
        }, {
            model: ModelIndex.Promotion,
            as: "MenusPromotions"
        }]
    }
    options.where = where;
    return Menu.findAll(options);
}

MenuController.getMenuByName = function(name){
    const options = {
        include: [{
            model: ModelIndex.Product
        }, {
            model: ModelIndex.Promotion,
            as: "MenusPromotions"
        }],
        where:{
            name : name
        }
    };
    return Menu.findAll(options);
};

MenuController.getMenuByPrice = function(price){
    const options = {
        include: [{
            model: ModelIndex.Product
        }, {
            model: ModelIndex.Promotion,
            as: "MenusPromotions"
        }],
        where:{
            price : price
        }
    };
    return Menu.findAll(options);
};

MenuController.getMenuBySize = function(size){
    const options = {
        include: [{
            model: ModelIndex.Product
        }, {
            model: ModelIndex.Promotion,
            as: "MenusPromotions"
        }],
        where:{
            size : size
        }
    };
    return Menu.findAll(options);
};

MenuController.displayMessage = function () {
    console.log('Page reservée à l\'affichage des menus');
};

module.exports = MenuController;
