const { DataTypes } = require('sequelize');
module.exports = (sequelize) => sequelize.define('menus', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    cost: DataTypes.FLOAT,
    image: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
});