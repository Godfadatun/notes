'use strict';
module.exports = (sequelize, DataTypes) => {
  const share = sequelize.define('share', {
    note_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    sharable_id: DataTypes.INTEGER
  }, {});
  share.associate = function(models) {
    // associations can be defined here
  };
  return share;
};