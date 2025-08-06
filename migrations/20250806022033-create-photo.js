'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Photos', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal('uuid_generate_v4()'),
        allowNull: false,
        primaryKey: true
      },
      eventId: {
        type: Sequelize.UUID,
        references: { model: 'Events', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      s3Key: { type: Sequelize.STRING, allowNull: false },
      s3Url: { type: Sequelize.STRING, allowNull: false },
      state: {
        type: Sequelize.ENUM('pending', 'approved', 'rejected', 'flagged'),
        allowNull: false,
        defaultValue: 'pending'
      },
      description: { type: Sequelize.STRING, allowNull: true },
      author: { type: Sequelize.STRING, allowNull: true },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Photos');
  }
};
