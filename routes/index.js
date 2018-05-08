const RouteManager = function() { };

RouteManager.attach = function(app) {
    app.use('/product', require('./product'));
    app.use('/menu', require('./menu'));
    app.use('/command', require('./command'));
};

module.exports = RouteManager;
