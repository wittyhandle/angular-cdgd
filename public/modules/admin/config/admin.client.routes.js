'use strict';

// Setting up route
angular.module('admin').config(['$stateProvider',
    function($stateProvider) {

        $stateProvider.
            state('login', {
                url: '/login',
                templateUrl: 'modules/admin/views/login.client.view.html',
                controller: 'LoginController'
            }).
            state('admin', {
                url: '/admin/index',
                templateUrl: 'modules/admin/views/project.index.view.html',
                data: {
                    secure: true
                }
            });
    }
]);