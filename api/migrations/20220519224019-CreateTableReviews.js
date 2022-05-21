'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('reviews', {
            id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
            content: Sequelize.TEXT,
            menuId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'menus',
                    key: 'id',
                },
                onDelete: 'CASCADE',
            },
            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE,
        })
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('reviews');
    }
};