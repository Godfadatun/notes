'use strict';
module.exports = (sequelize, DataTypes) => {
  const media = sequelize.define('media', {
    user_id: DataTypes.INTEGER,
    note_id: DataTypes.INTEGER,
    media: DataTypes.STRING,
    extension: DataTypes.STRING
  }, {});
  media.associate = function(models) {
    // associations can be defined here
  };
  return media;
};