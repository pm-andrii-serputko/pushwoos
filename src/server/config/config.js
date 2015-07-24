var port = process.env.PORT || 9000;
var environment = process.env.NODE_ENV || 'local';

var config = {
    port: port,
    environment: environment,
    mongodb: 'mongodb://admin:123456@ds041871.mongolab.com:41871/notifications-dev'
};

module.exports = config;
