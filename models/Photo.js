'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Photo extends Model {
    static associate(models) {
      // Photo belongs to Event
      Photo.belongsTo(models.Event, { foreignKey: 'eventId' });
    }
  }

  Photo.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    eventId: {
      type: DataTypes.UUID,
      allowNull: false
    },
    s3Key: {
      type: DataTypes.STRING,
      allowNull: false
    },
    s3Url: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state: {
      type: DataTypes.ENUM('pending', 'approved', 'rejected', 'flagged'),
      allowNull: false,
      defaultValue: 'pending'
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    author: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Photo',
  });

  Photo.STATES = {
    PENDING: 'pending',
    APPROVED: 'approved',
    REJECTED: 'rejected',
    FLAGGED: 'flagged'
  };

  return Photo;
};
