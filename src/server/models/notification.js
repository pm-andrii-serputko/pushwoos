var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var notificationSchema = new Schema({
    title: {type: String},
    message: {type: String},
    unread: {type: Boolean, default: true},
    createdOn: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Notification', notificationSchema);
