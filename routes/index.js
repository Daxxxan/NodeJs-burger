const RouteManager = function() { };

RouteManager.attach = function(app) {
    app.use('/product', require('./product'));
    app.use('/menu', require('./menu'));
};

module.exports = RouteManager;
