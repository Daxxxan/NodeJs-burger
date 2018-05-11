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
    const idprod = req.body.idprods;

    if(name === undefined || price === undefined || size === undefined || idprod === undefined){
        res.status(400).end();
        return;
    }

    MenuController.setMenu(name, price, size, idprod)
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

MenuRouter.get("/display/allMenu", function(req, res){
    MenuController.getAllMenu().then((display) => {
        res.json(display);
        res.end();
    }).catch((err) => {
        console.log(err);
        res.status(501).end();
    });
})

MenuRouter.get("/displayMenu/:id", function(req, res){
    const id = req.params.id;

    MenuController.getMenu(id).then((display) => {
        res.json(display);
        res.end();
    }).catch((err) => {
        console.log(err);
        res.status(501).end();
    });
})

MenuRouter.get("/displayMenuByPrice/:price", function(req, res){
    const price = req.params.price;

    MenuController.getMenuByPrice(price).then((display) => {
        res.json(display);
        res.end();
    }).catch((err) => {
        console.log(err);
        res.status(501).end();
    });
})

MenuRouter.get("/displayMenuBySize/:size", function(req, res){
    const size = req.params.size;

    MenuController.getMenuBySize(size).then((display) => {
        res.json(display);
        res.end();
    }).catch((err) => {
        console.log(err);
        res.status(501).end();
    });
})

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

MenuRouter.put('/modifySize/:id/:size', function(req, res){
    const id = req.params.id;
    const size = req.params.size;

    if(size === undefined || id === undefined){
        res.status(400).end();
        return;
    }

    MenuController.setSize(id, size).then((successFullyAdd) => {
        res.status(201).json(successFullyAdd);
        res.end();
    })
    .catch((err) => {
        console.log(err);
        res.status(500).end();
    });
})

module.exports = MenuRouter;
