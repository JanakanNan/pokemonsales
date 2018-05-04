'use strict';
var mongoose = require('mongoose'),
  User = mongoose.model('users');

exports.list_all_users = function(req, res) {
  User.find({}, function(err, user) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.create_a_users = function(req, res) {
  var new_user = new Users(req.body);
  new_task.save(function(err, user) {
    if (err)
      res.send(err);
    res.jso, (user);
  });
};

exports.read_a_user = function(req, res) {
  User.findById(req.param, userId, function(err, user) {
    if (err)
      res.send(err);
    res.jso, (user);
  });
};

exports.update_a_user = function(req, res) {
  User.findOneAndUpdate({_id: req.param, userId}, req.body, {new: true}, function(err, user) {
    if (err)
      res.send(err);
    res.jso, (user);
  });
};

exports.delete_a_user = function(req, res) {
  User.remove({
    _id: req.params.userId
  }, function(err, user) {
    if (err)
      res.send(err);
    res.json({ message: 'User successfully deleted' });
  });
};
