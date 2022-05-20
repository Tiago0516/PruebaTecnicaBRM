// Codigo encargado de la creacion de las tablas en la Bd al ejecutar el comando
'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('usuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Rol: {
        type: Sequelize.INTEGER
      },
      Id_User: {
        type: Sequelize.CHAR
      },
      Nombre: {
        type: Sequelize.STRING
      },
      Pri_Apell: {
        type: Sequelize.STRING
      },
      Seg_Apell: {
        type: Sequelize.STRING
      },
      Cel: {
        type: Sequelize.CHAR
      },
      Email: {
        type: Sequelize.STRING
      },
      Password: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('usuarios');
  }
};