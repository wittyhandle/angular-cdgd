'use strict';

angular.module('admin').controller('LoginController', ['$scope',
    function($scope) {

        $scope.login = function() {
            $scope.invalid = true;
        };


//        $scope.authentication = Authentication;
//
//        // If user is signed in then redirect back home
//        if ($scope.authentication.user) $location.path('/');
//
//        $scope.signup = function() {
//            $http.post('/auth/signup', $scope.credentials).success(function(response) {
//                // If successful we assign the response to the global user model
//                $scope.authentication.user = response;
//
//                // And redirect to the index page
//                $location.path('/');
//            }).error(function(response) {
//                $scope.error = response.message;
//            });
//        };
//
//        $scope.signin = function() {
//            $http.post('/auth/signin', $scope.credentials).success(function(response) {
//                // If successful we assign the response to the global user model
//                $scope.authentication.user = response;
//
//                // And redirect to the index page
//                $location.path('/');
//            }).error(function(response) {
//                $scope.error = response.message;
//            });
//        };
    }
]);