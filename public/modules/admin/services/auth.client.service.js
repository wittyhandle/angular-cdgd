'use strict';


/*
* Handles the actual work of calling the REST endpoint to authenticate the user
* */
angular.module('admin').factory('AuthService', ['$http', '$q', function($http, $q)
    {
        return {

            login: function(credentials)
            {
                var deferred = $q.defer();
                $http.post('/auth/signin', credentials)
                    .success(function(response)
                    {
                        deferred.resolve(response);
                    })
                    .error(function(msg)
                    {
                        deferred.reject(msg);
                    });

                return deferred.promise;
            }
        };

    }
]);