const express = require('express');
const controllers = require('../controllers');
const bodyParser = require('body-parser');
const UserController = controllers.UserController;

const UserRouter = express.Router();
UserRouter.use(bodyParser.json());

UserRouter.post('/',function(req, res){
    const name= req.body.username;
    const email= req.body.email;
    const password= req.body.password;

    if(name === undefined || email === undefined || password === undefined){
        res.status(400).end();
        return;
    }

    UserController.register(name, email, password)
        .then((successfullyAdd) => {
        res.status(201).json(successfullyAdd);
        res.end();
    })
    .catch((err) => {
        console.log(err);
    res.status(500).end();
    });
});

module.exports = UserRouter;