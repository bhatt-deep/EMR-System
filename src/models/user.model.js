'use strict';
var dbConn = require('../../config/db.config');

// User Object
var User = function(user){
this.name = user.name;
this.username = user.username;
this.permissions = user.permissions;
this.passhash = user.passhash;
this.added = new Date();
}


 
User.create = function (newUser, result) {
    dbConn.query("INSERT INTO user set ?", newUser, function (err, res) {
        if(err) {
        console.log("error: ", err);
        result(err, null);
        }
        else{
        console.log(res.insertId);
        result(null, res.insertId);
        }
    });
};


User.findById = function (id, result) {
    dbConn.query("Select * from user where user_id = ? ", id, function (err, res) {
        if(err) {
        console.log("error: ", err);
        result(err, null);
        }
        else{
        result(null, res);
        }
    });
};

User.findAll = function (result) {
        dbConn.query("Select * from user", function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(null, err);
            }
            else {
                console.log('user : ', res);
                result(null, res);
            }
        });
};

User.update = function(id, user, result){
    dbConn.query("UPDATE user SET name=?,username=?, permissions=?, passhash=? WHERE user_id = ?", 
    [user.name, user.username, user.permissions, user.passhash,id], function (err, res) {
        if(err) {
        console.log("error: ", err);
        result(null, err);
        }else{
        result(null, res);
        }
    });
};

User.delete = function(id, result){
    dbConn.query("DELETE FROM user WHERE user_id = ?", [id], function (err, res) {
        if(err) {
        console.log("error: ", err);
        result(null, err);
        }
        else{
        result(null, res);
        }
        });
    };

module.exports= User;