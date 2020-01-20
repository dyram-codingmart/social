"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("posts", "UserId", {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: "Users",
        key: "id"
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("posts", "UserId");
  }
};
