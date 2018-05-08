module.exports = function(sequelize, DataTypes) {
    const Command = sequelize.define('Command', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
            unique: true
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false
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
    Command.associate = _associate;
    return Command;
};

// INTERNAL FUNCTIONS
function _associate(models) {
    models.Command.belongsToMany(models.Product, {
        through:{model: 'command_product', unique: false},
        foreignKey: 'command_id'
    });
    models.Command.belongsToMany(models.Menu, {
        through:{model: 'command_menu', unique: false},
        foreignKey: 'command_id'
    })
}
