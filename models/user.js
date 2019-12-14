'use strict';

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    is_admin: DataTypes.BOOLEAN
  }, {});
  user.associate = function(models) {
    // associations can be defined here
    user.hasMany(models.note, {foreignKey: 'user_id', as: 'note'})
    user.hasMany(models.tag, {foreignKey: 'user_id', as: 'userTag'})
    user.hasMany(models.media, {foreignKey: 'user_id', as: 'userMedia'})
  };
  return user;
};