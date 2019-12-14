'use strict';
module.exports = (sequelize, DataTypes) => {
  const note = sequelize.define('note', {
    user_id: DataTypes.INTEGER,
    body: DataTypes.TEXT,
    tags: DataTypes.STRING,
    is_deleted_at: DataTypes.DATE
  }, {});
  note.associate = function(models) {
    // associations can be defined here
    note.hasMany(models.tag, {foreignKey: 'note_id', as: 'tag'})
    note.hasMany(models.media, {foreignKey: 'note_id', as: 'tagMedia'})
  };
  return note;
};