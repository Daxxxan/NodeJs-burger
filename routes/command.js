const express = require('express');
const controllers = require('../controllers');
const bodyParser = require('body-parser');
const CommandController = controllers.CommandController;

const CommandRouter = express.Router();
CommandRouter.use(bodyParser.json);

CommandRouter.post('/', function (req, res) {
    const status = req.body.status;
    const price = req.body.price;
    const menuId = req.body.menuId;

    if(status === undefined || price === undefined){
        res.status(400).end();
        return;
    }

    CommandController.setCommand(status, price)
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

    CommandController.setStatus(id, status)
    .then((menu) => {
        res.json(menu);
    })
    .catch((err) => {
        console.log(err);
        res.status(501).end();
    });
});

module.exports = CommandRouter;