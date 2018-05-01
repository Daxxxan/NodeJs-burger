const MenuController = function () {};
const ModelIndex = require('../models');
const Menu = ModelIndex.Menu;

MenuController.setMenu = function (name, price, size, prodList) {
    return Menu.create({
        name: name,
        price: price,
        size: size,

    })
}

MenuController.getMenuByName = function(name){
    const options = {
        where:{
            name : name
        }
    };
    return Menu.findAll(options);
}

MenuController.displayMessage = function () {
    console.log('Page reservée à l\'affichage des menus');
};

MenuController.addProduct = function(product){

}


module.exports = MenuController;