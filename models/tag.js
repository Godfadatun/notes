'use strict';
module.exports = (sequelize, DataTypes) => {
  const tag = sequelize.define('tag', {
    user_id: DataTypes.INTEGER,
    note_id: DataTypes.INTEGER
  }, {});
  tag.associate = function(models) {
    // associations can be defined here
  };
  return tag;
};