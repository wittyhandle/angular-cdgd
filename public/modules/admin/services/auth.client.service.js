'use strict';


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