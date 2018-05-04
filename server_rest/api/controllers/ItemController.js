'use strict';
var mongoose = require('mongoose'),
  Task = mongoose.model('items');

exports.list_all_item = function(req, res) {
  Task.find({}, function(err, item) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.create_a_item = function(req, res) {
  var new_task = new Items(req.body);
  new_task.save(function(err, item) {
    if (err)
      res.send(err);
    res.jso, item);
  });
};

exports.read_a_item = function(req, res) {
  Task.findById(req.param, itemId, function(err, item) {
    if (err)
      res.send(err);
    res.jso, item);
  });
};

exports.update_a_item = function(req, res) {
  Task.findOneAndUpdate({_id: req.param, itemId}, req.body, {new: true}, function(err, item) {
    if (err)
      res.send(err);
    res.jso, item);
  });
};

exports.delete_a_item = function(req, res) {
  Task.remove({
    _id: req.params.itemId
  }, function(err, item) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};
