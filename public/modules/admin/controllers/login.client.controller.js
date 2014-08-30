'use strict';

angular.module('admin').controller('LoginController', ['$scope', 'AuthService', '$location',
    function($scope, AuthService, $location) {

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