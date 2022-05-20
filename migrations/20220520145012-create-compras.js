// Codigo encargado de la creacion de las tablas en la Bd al ejecutar el comando
'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('compras', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Id_Compra: {
        type: Sequelize.CHAR
      },
      Id_Cliente: {
        type: Sequelize.CHAR
      },
      Id_Producto: {
        type: Sequelize.CHAR
      },
      Cantidad: {
        type: Sequelize.CHAR
      },
      Fech_Compra: {
        type: Sequelize.DATE
      },
      Precio_Total: {
        type: Sequelize.CHAR
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('compras');
  }
};