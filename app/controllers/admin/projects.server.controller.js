'use strict';

exports.projects = function(req, res) {
    res.jsonp({foo: 'bar'});
};

exports.signout = function(req, res) {
    req.logout();
    res.redirect('/');
};