'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('contacts', {
            id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
            userId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'users',
                    key: 'id',
                },
                onDelete: 'CASCADE',
            },
            name: Sequelize.STRING,
            mail: Sequelize.STRING,
            service: Sequelize.STRING,
            telephone: Sequelize.STRING,
            asunto: Sequelize.STRING,
            message: Sequelize.STRING,
            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE,
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('contacts');
    }
};