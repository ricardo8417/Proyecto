const { DataTypes } = require('sequelize');
module.exports = (sequelize) => sequelize.define('contacts', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'users',
            key: 'id',
        },
        onDelete: 'CASCADE',
    },
    name: DataTypes.STRING,
    mail: DataTypes.STRING,
    service: DataTypes.STRING,
    telephone: DataTypes.STRING,
    asunto: DataTypes.STRING,
    message: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
});