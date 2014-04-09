/**
 * Created by prism on 4/8/14.
 */
var client = require('phonegap-build-api');
var os = require('os').platform()
    config = require('./auth.js');
//client.auth({ username: config.username, password: config.password }, function(e, api) {
//    // time to make requests
//    console.log(e);
//    console.log(api);
//    console.log(os);
//    console.log(process.ENV);
//});

var home = require('homedir');
console.log(home());