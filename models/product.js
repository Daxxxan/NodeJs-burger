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
            allowNull: false
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
    Product.associate = _associate;
    return Product;
};

// INTERNAL FUNCTIONS
function _associate(models) {
    models.Product.belongsToMany(models.Command, {
        through:{model:'command_product',unique: false},
        foreignKey: 'product_id'
    });
    models.Product.belongsToMany(models.Menu, {
        through:{model:'menu_product',unique: false},
        foreignKey: 'product_id'
    });
}
