const { DataTypes } = require('sequelize');

module.exports = (sequelize) => sequelize.define('orders', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'users',
            key: 'id',
        },
        onDelete: 'CASCADE',
    },
    menuId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'menus',
            key: 'id',
        },
        onDelete: 'CASCADE',
    },
    quantity: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
});