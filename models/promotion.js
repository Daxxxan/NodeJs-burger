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
        },
        startDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        endDate: {
            type: DataTypes.DATE,
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

function _associate(models) {
    models.Promotion.belongsTo(models.Product, {
    });
    models.Promotion.belongsTo(models.Menu, {
    });
}
