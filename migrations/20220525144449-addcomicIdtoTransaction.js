
'use strict';

module.exports = {
   up (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'Transactions',
      'ComicId', {
        type: Sequelize.INTEGER,
      references: {
        model: 'Comics',
        key: 'id'
      },
      onUpdate: 'cascade',
      onDelete: 'cascade'
    }
    );
  },

   down (queryInterface, Sequelize) {
    return queryInterface.removeColumn('Transactions', 'ComicId', Sequelize.INTEGER, {})
  }
};
