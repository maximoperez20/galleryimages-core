'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('EventConfigs', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal('uuid_generate_v4()'),
        primaryKey: true,
        allowNull: false,
      },
      event_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: { model: 'Events', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      header_title: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: '¡Bienvenidos a la celebración!',
      },
      header_subtitle: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: 'Modifica tu subtitulo',
      },
      primary_color: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: '#F43F5E',
      },
      secondary_color: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: '#FB7185',
      },
      tertiary_color: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: '#FFE4E6',
      },
      card_color: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: '#ff567dff',
      },
      header_image: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      header_align: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'left',
      },
      header_text_size: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 24,
      },
      header_text_color: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: 'black',
      },
      header_font_family: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: 'sans',
      },
      header_animation_enabled: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      header_animation_class: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: 'animate-gradient-scroll',
      },
      enable_description: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      slide_duration: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 10,
      },
      show_datetime: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      description_font_family: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'sans',
      },
      animated_transitions_enabled: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      animated_transitions_class: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: 'animate-fade-in',
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('EventConfigs');
  }
};
