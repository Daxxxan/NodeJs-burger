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

    if(name === undefined || price === undefined || size === undefined ){
        res.status(400).end();
        return;
    }
    MenuController.setMenu(name, price, size)
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

MenuRouter.put('/modifyName/:oldname/:newname', function(req, res){
    const oldname = req.params.oldname;
    const newname = req.params.newname;

    if(oldname === undefined || newname === undefined){
        res.status(400).end();
        return;
    }

    MenuController.setName(oldname,newname).then((succesFullyAdd) => {
        res.status(201).json(succesFullyAdd);
        res.end();
    })
    .catch((err) => {
        console.log(err);
        res.status(500).end();
    });
});

MenuRouter.put('/modifyPrice/:name/:newprice', function(req, res){
    const name = req.params.name;
    const newPrice = req.params.newprice;

    if(name === undefined || newPrice === undefined){
        res.status(400).end();
        return;
    }

    MenuController.setPrice(name,newPrice).then((successFullyAdd) => {
        res.status(201).json(successFullyAdd);
        res.end();
    })
    .catch((err) => {
        console.log(err);
        res.status(500).end();
    });
});

module.exports = MenuRouter;