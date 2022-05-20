//Modelo de Productos: Aqui se declaran los campos de la BD y las relaciones con otras tablas

'use strict';
module.exports = (sequelize, DataTypes) => {
  const productos = sequelize.define('productos', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    Num_Lote: {
      allowNull: false,
      type: DataTypes.CHAR
    },
    Nom_Prod: {
      allowNull: false,
      type: DataTypes.STRING
    },
    Precio: {
      allowNull: false,
      type: DataTypes.CHAR
    },
    Cant_Disp: {
      allowNull: false,
      type: DataTypes.CHAR
    },
    Fech_Ingreso: {
      allowNull: false,
      type: DataTypes.DATE
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
    tableName: 'productos',
    classMethods: {}
  });
  productos.associate = function(models) {
    // associations can be defined here
    };
  return productos;
};