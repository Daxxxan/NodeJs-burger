const express = require('express');
const controllers = require('../controllers');
const bodyParser = require('body-parser');
const PromotionController = controllers.PromotionController;
const UserController = controllers.UserController;

const PromotionRouter = express.Router();
PromotionRouter.use(bodyParser.json());

PromotionRouter.post('/addProductPromotion', function(req, res) {
    const log = UserController.isLogged(req);
    if(log){
        const price = req.body.price;
        const startDate = req.body.startDate;
        const endDate = req.body.endDate;
        const productId = req.body.productId;

        if(price === undefined || startDate === undefined || endDate === undefined || productId === undefined){
            res.status(400).end();
            return;
        }
        PromotionController.setProductPromotion(price, startDate, endDate, productId)
            .then((successfullyAdd) => {
            res.status(201).json(successfullyAdd);
        })
        .catch((err) => {
                console.log(err);
            res.status(500).end();
        });
    }else{
        res.status(400).send({ auth: false, message: 'Can not read token' }).end();
    }
});

PromotionRouter.post('/addMenuPromotion', function(req, res) {
    const log = UserController.isLogged(req);
    if(log){
        const price = req.body.price;
        const startDate = req.body.startDate;
        const endDate = req.body.endDate;
        const menuId = req.body.menuId;

        if(price === undefined || startDate === undefined || endDate === undefined || menuId === undefined){
            res.status(400).end();
            return;
        }
        PromotionController.setMenuPromotion(price, startDate, endDate, menuId)
            .then((successfullyAdd) => {
            res.status(201).json(successfullyAdd);
        })
        .catch((err) => {
                console.log(err);
            res.status(500).end();
        });
    }else{
        res.status(400).send({ auth: false, message: 'Can not read token' }).end();
    }

});

PromotionRouter.get('/displayAll', function(req, res){
    PromotionController.getPromotion()
    .then((Promotion) => {
        res.json(Promotion);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).end();
    });
});

PromotionRouter.get('/displayPromotionByProduct/:id', function(req, res) {
    const id = req.params.id;

    PromotionController.getPromotionByProduct(id)
    .then((Promotion) => {
        res.json(Promotion);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).end();
    });
});

PromotionRouter.get('/displayPromotionByMenu/:id', function(req, res) {
    const id = req.params.id;

    PromotionController.getPromotionByMenu(id)
    .then((Promotion) => {
        res.json(Promotion);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).end();
    });
});

PromotionRouter.get('/displayPromotionByStartDate/:startDate', function(req, res) {
    let date = req.params.startDate;
    date = new Date(date);

    PromotionController.getPromotionByStartDate(date)
    .then((Promotion) => {
        res.json(Promotion);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).end();
    });
});

PromotionRouter.get('/displayPromotionByEndDate/:endDate', function(req, res) {
    let date = req.params.endDate;

    PromotionController.getPromotionByEndDate(date)
    .then((Promotion) => {
        res.json(Promotion);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).end();
    });
});

PromotionRouter.patch('/modifyPromotionPrice/:id/:price', function(req, res) {
    const id = req.params.id;
    const price = req.params.price;

    PromotionController.setPromotionPrice(id, price)
    .then(() => {
        res.status(204).end();
    })
    .catch((err) => {
        console.log(err);
        res.status(500).end();
    });
});

PromotionRouter.delete("/delete/:id",function(req, res){
    const log = UserController.isLogged(req);
    if(log){
        const id = req.params.id;
        if(id === null){
            res.status(400).end();
            return;
        }

        PromotionController.deletePromotion(id).then(() => {
            res.status(204).end();
        })
        .catch((err) => {
                console.log(err);
            res.status(500).end();
        });
    }else{
        res.status(400).send({ auth: false, message: 'Can not read token' }).end();
    }
});

module.exports = PromotionRouter;
