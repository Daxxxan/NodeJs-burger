const express = require('express');
const controllers = require('../controllers');
const bodyParser = require('body-parser');
const ProductController = controllers.ProductController;
const UserController = controllers.UserController;

const ProductRouter = express.Router();
ProductRouter.use(bodyParser.json());

ProductRouter.post('/', function (req, res) {
    const log = UserController.isLogged(req);
    if(log){
        const name = req.body.name;
        const cal = req.body.cal;
        const highlight = req.body.highlight;
        const price = req.body.price;
        const size = req.body.size;

        if(name === undefined || cal === undefined || highlight === undefined || price === undefined || size === undefined){
            res.status(400).end();
            return;
        }
        ProductController.setProduct(name, cal, highlight, price, size)
            .then((successfullyAdd) => {
            res.status(201).json(successfullyAdd);
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

ProductRouter.patch('/modifyName/:oldName/:newName', function (req, res){
    const log = UserController.isLogged(req);
    if(log){
        const oldName = req.params.oldName;
        const newName = req.params.newName;

        if(oldName === undefined || newName === undefined){
            res.status(400).end();
            return;
        }

        ProductController.setProductName(oldName, newName)
            .then(() => {
            res.status(204).end();
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

ProductRouter.patch('/modifyCal/:name/:cal', function (req, res){
    const log = UserController.isLogged(req);
    if(log){
        const name = req.params.name;
        const cal = req.params.cal;

        if(name === undefined || cal === undefined){
            res.status(400).end();
            return;
        }

        ProductController.setProductCal(name, cal)
            .then(() => {
            res.status(204).end();
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

ProductRouter.patch('/modifySize/:id/:size', function (req, res){
    const log = UserController.isLogged(req);
    if(log){
        const id = req.params.id;
        const size = req.params.size;

        if(id === undefined || size === undefined){
            res.status(400).end();
            return;
        }

        ProductController.setProductSize(id, size)
            .then(() => {
            res.status(204).end();
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

ProductRouter.patch('/modifyPrice/:name/:price', function (req, res) {
    const log = UserController.isLogged(req);
    if(log){
        const name = req.params.name;
        const price = req.params.price;

        if(name === undefined || price === undefined){
            res.status(400).end();
            return;
        }

        ProductController.setProductPrice(name, price)
            .then(() => {
            res.status(204).end();
        res.end();
        })
        .catch ((err) => {
                console.log(err);
            res.status(500).end();
        })
    }else{
        res.status(400).send({ auth: false, message: 'Can not read token' }).end();
    }

});

ProductRouter.patch('/modifyHighlight/:id', function (req, res) {
    const log = UserController.isLogged(req);
    if(log){
        const id = req.params.id;

        if(id === undefined){
            res.status(400).end();
            return;
        }

        ProductController.setProductHighLight(id)
            .then(() => {
            res.status(204).end();
        res.end();
        })
        .catch ((err) => {
                console.log(err);
            res.status(500).end();
        })
    }else{
        res.status(400).send({ auth: false, message: 'Can not read token' }).end();
    }
});

ProductRouter.patch('/resetHighlight/:id', function (req, res) {
    const log = UserController.isLogged(req);
    if(log){
        const id = req.params.id;

        if(id === undefined){
            res.status(400).end();
            return;
        }

        ProductController.resetProductHighLight(id)
            .then(() => {
            res.status(204).end();
        res.end();
        })
        .catch ((err) => {
                console.log(err);
            res.status(500).end();
        })
    }else{
        res.status(400).send({ auth: false, message: 'Can not read token' }).end();
    }
});

ProductRouter.delete('/delete/:id', function (req, res) {
    const log = UserController.isLogged(req);
    if(log){
        const id = req.params.id;

        if(id === undefined){
            res.status(400).end();
            return;
        }

        ProductController.deleteProduct(id)
        .then(() => {
            res.status(204).end();
        })
        .catch ((err) => {
            console.log(err);
            res.status(500).end();
        })
    }else{
        res.status(400).send({ auth: false, message: 'Can not read token' }).end();
    }
});

ProductRouter.get("/display/allProducts", function(req, res){
    ProductController.getAllProduct().then((product) => {
        res.json(product);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).end();
    });
});

ProductRouter.get('/displayByName/:name', function (req, res) {
    const name = req.params.name;

    if( name === undefined ) {
        res.status(400).end()
    }

    ProductController.getProductByName(name)
    .then((product) => {
        res.json(product);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).end();
    });
});

ProductRouter.get('/displayByPrice/:price', function (req, res) {
   const price = req.params.price;

    if( price === undefined ) {
        res.status(400).end()
    }

   ProductController.getProductByPrice(price)
   .then((product) => {
        res.json(product);
   })
   .catch((err) => {
        console.log(err);
        res.status(500).end();
   });
});

ProductRouter.get('/displayByCal/:cal', function (req, res) {
    const cal = req.params.cal;

    if( cal === undefined ) {
        res.status(400).end();
    }

    ProductController.getProductByCal(cal)
    .then((product) => {
        res.json(product);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).end();
    });
});

ProductRouter.get('/displayBySize/:size', function (req, res) {
    const size = req.params.size;

    if( size === undefined ) {
        res.status(400).end();
    }

    ProductController.getProductBySize(size)
    .then((product) => {
        res.json(product);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).end();
    });
});

ProductRouter.get('/displayHighlight', function(req, res){
   ProductController.getProductByHighlight()
   .then((product) => {
       res.json(product);
   })
    .catch((err) => {
        console.log(err);
       res.status(500).end();
    });
});

module.exports = ProductRouter;
