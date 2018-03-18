module.exports = function(sequelize, DataTypes) {
    const Menu = sequelize.define('Product', {
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
    //Menu.associate = _associate;
    return Menu;
};

//TODO Code function _associate
// INTERNAL FUNCTIONS
/*
function _associate(models) {

}
*/