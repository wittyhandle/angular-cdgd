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
]).factory('AuthInterceptor', ['$location',
    function($location)
    {
        return {

            responseError: function(response) {
                $location.path('/login');
            }
        };
    }
]);