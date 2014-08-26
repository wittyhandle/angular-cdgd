'use strict';


/*
* Handles the actual work of calling the REST endpoint to authenticate the user
* */
angular.module('admin').factory('AuthService', ['$http',
    function($http)
    {
        var authService = {};

        authService.login = function(credentials)
        {
            return $http
                .post('/auth/signin', credentials)
                .then(function(response)
                {
                    return response ? response.data : {};
                });
        };

        return authService;
    }
]);