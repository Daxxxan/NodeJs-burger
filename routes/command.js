const express = require('express');
const controllers = require('../controllers');
const bodyParser = require('body-parser');
const CommandController = controllers.CommandController;
const UserController = controllers.UserController;

const CommandRouter = express.Router();
CommandRouter.use(bodyParser.json());

CommandRouter.post('/', function (req, res) {
    const log = UserController.isLogged(req);
    if(log){
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
    }else{
        res.status(400).send({ auth: false, message: 'Can not read token' }).end();
    }

});

CommandRouter.put('/modifyStatus/:id/:status', function (req, res) {
    const log = UserController.isLogged(req);
    if(log){
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
    }else{
        res.status(400).send({ auth: false, message: 'Can not read token' }).end();
    }

});

CommandRouter.put('/modifyPrice/:id/:price', function (req, res) {
    const log = UserController.isLogged(req);
    if(log){
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
    }else{
        res.status(400).send({ auth: false, message: 'Can not read token' }).end();
    }

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

CommandRouter.get('/displayCommandByStatus/:status', function(req, res){
    status = req.params.status;

    CommandController.getCommandByStatus(status).then((display) => {
        res.json(display);
        res.end();
    }).catch((err) => {
        console.log(err);
        res.status(501).end();
    });
});

CommandRouter.get("/displayCommandByProductName/:productName", function(req, res) {
    const productName = req.params.productName;

    CommandController.getCommandByProductName(productName).then((display) => {
      res.json(display);
      res.end();
    }).catch((err) => {
        console.log(err);
        res.status(501).end();
    })
})

module.exports = CommandRouter;
