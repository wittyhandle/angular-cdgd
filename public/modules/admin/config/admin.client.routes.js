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
                controller: 'ProjectController',
                data: {
                    secure: true
                },
                resolve: {
                    projects: function(ProjectService) {
                        return ProjectService.listProjects();
                    }
                }
            });
    }
]).config(['$httpProvider',
    function($httpProvider) {
        $httpProvider.interceptors.push([
            '$injector', function($injector)
            {
                return $injector.get('AuthInterceptor');
            }
        ]);
    }
]).factory('AuthInterceptor', ['$location', '$q',
    function($location, $q)
    {
        return {
            request: function (config) {
                return config || $q.when(config);
            },
            requestError: function(request){
                return $q.reject(request);
            },
            response: function (response) {
                return response || $q.when(response);
            },
            responseError: function (response)
            {
                if (response && response.status === 401)
                {
                    $location.path('/login');
                }
                else
                {
                    return $q.reject(response);
                }

            }
        };

    }
]);