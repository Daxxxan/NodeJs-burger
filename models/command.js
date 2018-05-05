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
    /*models.Command.hasMany(models.Menu, {
        as: 'menus'
    });
    models.Command.hasMany(models.Product, {
        as: 'products'
    });*/
}
