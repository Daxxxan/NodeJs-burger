module.exports = function(sequelize, DataTypes) {
    const Menu = sequelize.define('Menu', {
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
    Menu.associate = _associate;
    return Menu;
};

// INTERNAL FUNCTIONS
function _associate(models) {
    models.Menu.belongsToMany(models.Product, {
        through:{model:'menu_product',unique: false},
        foreignKey: 'menu_id'
    });
    models.Menu.belongsToMany(models.Command, {
        through:{model:'command_menu',unique: false},
        foreignKey: 'menu_id'
    });
}