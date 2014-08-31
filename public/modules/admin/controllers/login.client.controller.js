'use strict';

angular.module('admin').controller('LoginController', ['$scope', 'AuthService', '$location', '$rootScope',
    function($scope, AuthService, $location, $rootScope) {

        $rootScope.bodyClass = 'login';
        $scope.login = function(credentials)
        {
            AuthService.login(credentials).then(
                function (user)
                {
                    $location.path('/admin/index');
                },
                function()
                {
                    $scope.invalid = true;
                });
        };
    }
]);