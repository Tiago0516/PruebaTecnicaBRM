//Codigo encargado de la creacion de las tablas en la Bd al ejecutar el comando
'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('productos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Num_Lote: {
        type: Sequelize.CHAR
      },
      Nom_Prod: {
        type: Sequelize.STRING
      },
      Precio: {
        type: Sequelize.CHAR
      },
      Cant_Disp: {
        type: Sequelize.CHAR
      },
      Fech_Ingreso: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('productos');
  }
};