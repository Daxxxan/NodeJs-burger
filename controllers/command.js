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

CommandController.getAllCommand = function () {
    const options = {
        include: [{
            model: ModelIndex.Menu,
            include: [{
                model: ModelIndex.Product
            }]
        }, {
            model: ModelIndex.Product
        }]
    };
    return Command.findAll(options);
};

CommandController.getCommand = function (id) {
    const where = {
        id: id
    }
    const options = {
        include: [{
            model: ModelIndex.Menu,
            include: [{
                model: ModelIndex.Product
            }]
        }, {
            model: ModelIndex.Product
        }]
    }
    options.where = where;
    return Command.findAll(options);
}

CommandController.setStatus = function(id, status){
    return Command.update({
        status: status
    },{
        where: {
            id: id
        }
    })
};

CommandController.setPrice = function (id, price) {
    return Command.update({
        price: price
    }, {
        where: {
            id: id
        }
    })
};

module.exports = CommandController;