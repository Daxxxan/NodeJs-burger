const RouteManager = function() { };

RouteManager.attach = function(app) {
    app.use('/product', require('./product'));
    app.use('/menu', require('./menu'));
    app.use('/command', require('./command'));
    app.use('/promotion', require('./promotion'));
    app.use('/user', require('./user'));
};

module.exports = RouteManager;
