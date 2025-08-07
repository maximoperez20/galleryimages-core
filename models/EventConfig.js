'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class EventConfig extends Model {
    static associate(models) {
      EventConfig.belongsTo(models.Event, { foreignKey: 'event_id' });
    }
  }

  EventConfig.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    event_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    header_title: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: '¡Bienvenidos a la celebración!',
    },
    header_subtitle: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'Modifica tu subtitulo',
    },
    primary_color: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '#F43F5E',
    },
    secondary_color: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '#FB7185',
    },
    tertiary_color: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '#FFE4E6',
    },
    card_color: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '#ff567dff',
    },
    header_image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    header_align: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'left',
    },
    header_text_size: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 24,
    },
    header_text_color: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'black',
    },
    header_font_family: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'sans',
    },
    header_animation_enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    header_animation_class: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'animate-gradient-scroll',
    },
    enable_description: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    slide_duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
    },
    show_datetime: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    description_font_family: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'sans',
    },
    animated_transitions_enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    animated_transitions_class: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'animate-fade-in',
    }
  }, {
    sequelize,
    modelName: 'EventConfig',
    tableName: 'EventConfigs',
  });

  return EventConfig;
};
