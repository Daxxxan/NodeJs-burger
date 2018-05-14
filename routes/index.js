const swaggerUI = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

const RouteManager = function() { };

RouteManager.attach = function(app) {
    app.use('/api-doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
    app.use('/product', require('./product'));
    app.use('/menu', require('./menu'));
    app.use('/command', require('./command'));
    app.use('/promotion', require('./promotion'));
    app.use('/user', require('./user'));
};

module.exports = RouteManager;
