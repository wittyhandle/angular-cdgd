'use strict';

angular.module('admin').controller('ProjectController', ['$scope', 'projects', '$rootScope',
    function($scope, projects, $rootScope) {

        $rootScope.bodyClass = 'projects';

        $scope.projects = projects;
        $scope.name = 'mike';
    }
]);