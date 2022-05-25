'use strict';
const fs = require('fs')
module.exports = {
   up (queryInterface, Sequelize) {
    const comic = JSON.parse(fs.readFileSync('./data/comic.json'));
    comic.forEach(element => {
      element.createdAt = new Date(),
      element.updatedAt = new Date()      
    });
    return queryInterface.bulkInsert('Comics', comic, {})
  },

   down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Comics', null, {});
  }
};
