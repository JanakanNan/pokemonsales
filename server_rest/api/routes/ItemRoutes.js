'use strict';
module.exports = function(app) {
  var item = require('../controllers/ItemController');

  // item Routes
  app.route('/items')
    .get(item.list_all_items)
    .post(item.create_a_items);


  app.route('/items/:itemId')
    .get(item.read_a_item)
    .put(item.update_a_item)
    .delete(item.delete_a_item);
};
