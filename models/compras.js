//Modelo de Compras: Aqui se declaran los campos de la BD y las relaciones con otras tablas

'use strict';
module.exports = (sequelize, DataTypes) => {
  const compras = sequelize.define('compras', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    Id_Compra: {
      allowNull: false,
      type: DataTypes.CHAR
    },
    Id_Cliente: {
      allowNull: false,
      type: DataTypes.CHAR
    },
    Id_Producto: {
      allowNull: false,
      type: DataTypes.CHAR
    },
    Cantidad: {
      allowNull: false,
      type: DataTypes.CHAR
    },
    Fech_Compra: {
      allowNull: false,
      type: DataTypes.DATE
    },
    Precio_Total: {
      allowNull: false,
      type: DataTypes.CHAR
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
    tableName: 'compras',
    classMethods: {}
  });
  compras.associate = function(models) {
    // associations can be defined here
    compras.belongsTo(models.usuarios,
        {
            as: 'usuarios',
            foreignKey: 'Id_Cliente',
        }
    );
    compras.belongsTo(models.productos,
        {
            as: 'productos',
            foreignKey: 'Id_Producto',
        }
    );
};
  return compras;
};