var express = require('express');
var router = express.Router();
var NotificationModel = require('../models/notification');
var requestify = require('requestify');

/* GET notifications listing. */
router.get('/', function(req, res, next) {
    NotificationModel.find().sort({createdOn: 'desc'}).exec().then(function(notifications) {
        res.send(notifications);
    }, function(error) {
        res.send(error);
    });
});

/* GET notification item */
router.get('/:id', function(req, res, next) {
    NotificationModel.findById(req.params.id).exec().then(function(notification) {
        res.send(notification);
    }, function(error) {
        res.status(404);
        res.send(error);
    });
});

/* POST create an notification. */
router.post('/', function(req, res, next) {
    var body = req.body;
    var model = new NotificationModel(body);
    model.save().then(function(notification) {
        var data = {
            'request': {
                'application': '7741C-ADBD8',
                'auth': 'wq4fQMEb6HJhKmk3ZyzfyNqXFNbKfOTl7NUCVp6Uh0rtiYh8xZjXmWfxiCaHXLyGYckANZjdWTS8Z5eNCRoz',
                'notifications': [{
                    'send_date': 'now',
                    'ignore_user_timezone': true,
                    'content': body.title + ' - ' + body.message
                }]
            }
        };
        requestify.post('https://cp.pushwoosh.com/json/1.3/createMessage', data);

        res.send(notification);
    }, function(error) {
        res.send(error);
    });
});

router.put('/read', function(req, res, next) {
    NotificationModel.update({unread: true}, {unread: false}, {multi: true}).exec().then(function(notifications) {
        res.send(notifications);
    }, function(error) {
        res.send(error);
    });
});

/* PUT update an notification. */
router.put('/:id', function(req, res, next) {
    NotificationModel.findByIdAndUpdate(req.params.id, req.body).exec().then(function(notification) {
        res.send(notification);
    }, function(error) {
        res.send(error);
    });
});

/* DELETE remove notification. */
router.delete('/:id', function(req, res, next) {
    NotificationModel.remove({_id: req.params.id}).exec().then(function(notification) {
        res.send(notification);
    }, function(error) {
        res.send(error);
    });
});

module.exports = router;
