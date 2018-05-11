'use strict';
var mongoose = require('mongoose'),
  Item = mongoose.model('items');

exports.list_all_items = function(req, res) {
  Item.find({}, function(err, item) {
    if (err)
      res.send(err);
    res.json(item);
  });
};

exports.create_a_items = function(req, res) {
  var new_item = new Item(req.body);
  new_item.save(function(err, item) {
    if (err)
      res.send(err);
    res.json(item);
  });
};

exports.read_a_item = function(req, res) {
  Item.findById(req.param, itemId, function(err, item) {
    if (err)
      res.send(err);
    res.jso, (item);
  });
};

exports.update_a_item = function(req, res) {
  Item.findOneAndUpdate({_id: req.param, itemId}, req.body, {new: true}, function(err, item) {
    if (err)
      res.send(err);
    res.json, (item);
  });
};

exports.delete_a_item = function(req, res) {
  Item.remove({
    _id: req.params.itemId
  }, function(err, item) {
    if (err)
      res.send(err);
    res.json({ message: 'Item successfully deleted' });
  });
};
