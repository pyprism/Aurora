/**
 * Created by prism on 4/8/14.
 */
'use strict';

var client = require('phonegap-build-api');
var os = require('os').platform(),
    fs = require('fs'),
    home = require('homedir'),
    Table = require('cli-table'),
    color = require('cli-color'),
config = require('./auth.js');
//client.auth({ username: config.username, password: config.password }, function(e, api) {
//    // time to make requests
//    console.log(e);
//    console.log(api);
//    console.log(os);
//    console.log(process.ENV);
//});

var location = home() + "/.HirenGap";


function dir() {
    //todo windows support
    fs.exists(location, function (exists) {
        //console.log(exists ? "it's there" : "no passwd!");
        if (!exists) {
            fs.mkdirSync(location); // todo permission
        }
        fs.openSync(location + "/token", 'w');
    });
}

function checkToken(){
    fs.exists(location + '/token',function(exists){
        if(!exists){
            console.log("You are not logged in . Please Login First!");
            login();
        }
    });
}
function login() {
    dir();
    fs.exists(location + '/token', function (exists) {
        if (!exists) {
            client.auth({ username: config.username, password: config.password }, function (e, api) {
                if (e) console.log("Ops login error, error details : ", e);
                fs.writeFileSync(location + "/token", api.token);
            });
        }
    });

}

function logout() {
    fs.exists(location + '/token', function (exists) {
        if (exists) {
            fs.unlinkSync(location + '/token');
            console.log("Logged Out!");
        }
    });
}

function readToken(){
    return fs.readFileSync(location + '/token').toString();
}

function appList(){
    checkToken();
    client.auth({ token: readToken() }, function(e, api) {
        api.get('/apps', function(e, data) {
            //console.log('error:', e);
            //console.log('data:', data);
            var table = new Table();

            table.push(
                { 'Some key': (data.apps).title }
                , { 'Another key': 'Another value' }
            );

            //console.log(table.toString());
            //console.log(data.apps[0].title);
            console.log(data.apps);
        });
    });

}

appList();
//console.log(readToken());