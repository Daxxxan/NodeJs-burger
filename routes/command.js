const express = require('express');
const controllers = require('../controllers');
const bodyParser = require('body-parser');
const CommandController = controllers.CommandController;

const CommandRouter = express.Router();
CommandRouter.use(bodyParser.json());

CommandRouter.post('/', function (req, res) {
    const status = req.body.status;
    const price = req.body.price;
    const idProducts = req.body.idProducts;
    const idMenus = req.body.idMenus;

    if(status === undefined || price === undefined || idProducts === undefined || idMenus === undefined){
        res.status(400).end();
        return;
    }
    CommandController.setCommand(status, price, idProducts, idMenus)
    .then((successfullyAdd) => {
        res.status(201).json(successfullyAdd);
        res.end();
    })
    .catch((err) => {
        console.log(err);
        res.status(500).end();
    })
});

CommandRouter.put('/modifyStatus/:id/:status', function (req, res) {
    const id = req.params.id;
    const status = req.params.status;

    if(id === undefined || status === undefined){
        res.status(400).end();
        return;
    }

    CommandController.setStatus(id, status).then((succesFullyAdd) => {
        res.status(201).json(succesFullyAdd);
        res.end();
    })
    .catch((err) => {
        console.log(err);
        res.status(500).end();
    });
});

CommandRouter.put('/modifyPrice/:id/:price', function (req, res) {
    const id = req.params.id;
    const price = req.params.price;

    if(id === undefined || price === undefined){
        res.status(400).end();
        return;
    }

    CommandController.setPrice(id, price).then((succesFullyAdd) => {
        res.status(201).json(succesFullyAdd);
        res.end();
    })
    .catch((err) => {
            console.log(err);
        res.status(500).end();
    });
});

CommandRouter.get('/displayAll', function (req, res) {
   CommandController.getAllCommand().then((display) => {
        res.json(display);
        res.end();
    }).catch((err) => {
        console.log(err);
        res.status(501).end();
    });
});

CommandRouter.get('/displayCommand/:id', function (req, res) {
    id = req.params.id;

    CommandController.getCommand(id).then((display) => {
        res.json(display);
        res.end();
    }).catch((err) => {
        console.log(err);
        res.status(501).end();
    });
});

module.exports = CommandRouter;