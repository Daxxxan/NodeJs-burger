const express = require('express');
const controllers = require('../controllers');
const bodyParser = require('body-parser');
const MenuController = controllers.MenuController;

const MenuRouter = express.Router();
MenuRouter.use(bodyParser.json());

MenuRouter.post('/', function (req, res) {
    const name = req.body.name;
    const price = req.body.price;
    const size = req.body.size;
    //const prods = req.body.prods;

    if(name === undefined || price === undefined || size === undefined /*|| prods === undefined*/){
        res.status(400).end();
        return;
    }
    MenuController.setMenu(name, price, size, /*prods*/)
        .then((successfullyAdd) => {
        res.status(201).json(successfullyAdd);
    res.end();
    })
    .catch((err) => {
        console.log(err);
    res.status(500).end();
    });
});

MenuRouter.get('/:name', function (req, res) {
    const name = req.params.name;

    MenuController.getMenuByName(name)
        .then((menu) => {
        res.json(menu);
    })
    .catch((err) => {
        console.log(err);
    res.status(501).end();
    });
});

module.exports = MenuRouter;