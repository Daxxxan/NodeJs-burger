const CommandController = function() {};
const ModelIndex = require('../models');
const Command = ModelIndex.Command;
const Menu = ModelIndex.Menu;
const Product = ModelIndex.Product;

CommandController.setCommand = function(status, price, menuId){
    return Command.create({
        status: status,
        price: price,
        productId: menuId
    }).then(function (command) {
        command.addCommand(command.id, menuId);
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