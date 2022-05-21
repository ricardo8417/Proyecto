'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('menus', {
            id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
            name: Sequelize.STRING,
            description: Sequelize.TEXT,
            cost: Sequelize.FLOAT,
            image: Sequelize.STRING,
            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE,
        })
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('menus');
    }
};