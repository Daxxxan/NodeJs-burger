const CommandController = function() {};
const ModelIndex = require('../models');
const Command = ModelIndex.Command;
const Menu = ModelIndex.Menu;
const Product = ModelIndex.Product;

CommandController.setCommand = function(status, price, idProducts){
    return Command.create({
        status: status,
        price: price
    }).then(function (command) {
        idProducts.forEach(function(elem) {
            command.addProduct(elem);
        });
    })
};

CommandController.setStatus = function(id, status){
    return Menu.update({
        status: status
    },{
        where: {
            id: id
        }
    })
};

module.exports = CommandController;