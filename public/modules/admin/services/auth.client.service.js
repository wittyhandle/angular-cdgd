'use strict';


/*
* Handles the actual work of calling the REST endpoint to authenticate the user
* */
angular.module('admin').factory('AuthService', ['$http',
    function($http)
    {
        var authService = {}

        authService.login = function(credentials)
        {
            console.log(credentials);
            return true;
        }

        return authService;
    }
]);