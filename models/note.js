'use strict';
module.exports = (sequelize, DataTypes) => {
  const note = sequelize.define('note', {
    user_id: DataTypes.INTEGER,
    body: DataTypes.TEXT,
    is_deleted_at: DataTypes.DATE
  }, {});
  note.associate = function(models) {
    // associations can be defined here
  };
  return note;
};