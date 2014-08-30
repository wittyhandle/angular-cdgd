'use strict';


angular.module('admin').factory('ProjectService', ['$http', '$q', function($http, $q) {

        return {

            listProjects: function() {

                var deferred = $q.defer();
                $http.get('/admin/projects')
                    .success(function(data)
                    {
                        deferred.resolve(
                            {
                                thing: data.foo
                            });
                    })
                    .error(function(msg, code)
                    {
                        deferred.reject(msg);
                    });

                return deferred.promise;
            }

        };
    }
]);