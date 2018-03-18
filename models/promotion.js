module.exports = function(sequelize, DataTypes) {
    const Promotion = sequelize.define('Promotion', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
            unique: true
        },
        price: {
            type: DataTypes.DOUBLE,
            allowNull: false
        }
    }, {
        paranoid: true,
        underscored: true,
        freezeTableName: true
    });
    Promotion.associate = _associate;
    return Promotion;
};

// INTERNAL FUNCTIONS
function _associate(models) {
    models.Promotion.hasOne(models.Product, {
        as: 'promotion'
    });
    models.Promotion.hasOne(models.Menu, {
        as: 'menu'
    });
}