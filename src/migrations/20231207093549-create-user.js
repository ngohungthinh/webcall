'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      //   username: DataTypes.STRING,
      // password: DataTypes.STRING,
      // name: DataTypes.STRING,
      // gender: DataTypes.BOOLEAN,
      // birthday: DataTypes.DATEONLY,
      // location: DataTypes.STRING,
      // job: DataTypes.STRING,
      // hobby: DataTypes.STRING,
      // role: DataTypes.STRING,
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.BOOLEAN
      },
      birthday: {
        type: Sequelize.DATEONLY
      },
      location: {
        type: Sequelize.STRING
      },
      job: {
        type: Sequelize.STRING
      },
      hobby: {
        type: Sequelize.STRING
      },
      role: {
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};