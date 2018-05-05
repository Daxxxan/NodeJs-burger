const MenuController = function () {};
const ModelIndex = require('../models');
const Menu = ModelIndex.Menu;
const Product = ModelIndex.Product;

MenuController.setMenu = function (name, price, size, idProducts) {
    return Menu.create({
        name: name,
        price: price,
        size: size
    }).then(function(menu) {
        idProducts.forEach(function (elem) {
            menu.addProduct(menu.id, elem);
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

MenuController.setSize = function(name, newSize){
    return Menu.update({
        size: newSize
    },{
        where: {
            name: name
        }
    })
};

MenuController.getMenuByName = function(name){
    const options = {
        where:{
            name : name
        }
    };
    return Menu.findAll(options);
}

MenuController.getMenuByPrice = function(price){
    const options = {
        where:{
            price : price
        }
    };
    return Menu.findAll(options);
}

MenuController.getMenuBySize = function(size){
    const options = {
        where:{
            size : size
        }
    };
    return Menu.findAll(options);
}

MenuController.displayMessage = function () {
    console.log('Page reservée à l\'affichage des menus');
};

MenuController.addProduct = function(menuId, productId){
    return Menu.find({
        where: {
            id: menuId
        }
    })
        .then((menu) => {
        return Product.findById({
            where: {
                id: productId
            }
        })
            .then((product) => {
            return menu.addProduct(product);
        });
    });
}


module.exports = MenuController;