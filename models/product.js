module.exports = function(sequelize, DataTypes) {
    const Product = sequelize.define('Product', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
            unique: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        cal: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        highlight: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        price: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        size: {
            type: DataTypes.CHAR,
            allowNull: false
        }
    }, {
        paranoid: true,
        underscored: true,
        freezeTableName: true
    });
    //Product.associate = _associate;
    return Product;
};

//TODO Code function _associate
// INTERNAL FUNCTIONS
/*
function _associate(models) {

}
*/