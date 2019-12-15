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
  };
  return user;
};