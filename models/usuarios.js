//Modelo de Usuarios: Aqui se declaran los campos de la BD y las relaciones con otras tablas

'use strict';
module.exports = (sequelize, DataTypes) => {
  const usuarios = sequelize.define('usuarios', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    Rol: {
      allowNull: false,
      type: DataTypes.CHAR
    },
    Id_User: {
      allowNull: false,
      type: DataTypes.CHAR
    },
    Nombre: {
      allowNull: false,
      type: DataTypes.STRING
    },
    Pri_Apell: {
      allowNull: false,
      type: DataTypes.STRING
    },
    Seg_Apell: {
      allowNull: false,
      type: DataTypes.STRING
    },
    Cel: {
      allowNull: false,
      type: DataTypes.CHAR
    },
    Email: {
      allowNull: false,
      type: DataTypes.STRING
    },
    Password: {
      allowNull: false,
      type: DataTypes.STRING
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'usuarios',
    classMethods: {}
  });
  usuarios.associate = function (models) {
    // associations can be defined here
  };
  return usuarios;
};