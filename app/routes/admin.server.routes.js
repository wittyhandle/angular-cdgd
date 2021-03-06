'use strict';

var admin = require('../../app/controllers/admin');

module.exports = function(app) {

    app.route('/admin/projects')
        .get(admin.projects);

    app.route('/admin/signout')
        .get(admin.signout);
};