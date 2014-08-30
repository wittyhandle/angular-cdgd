'use strict';

angular.module('admin').controller('ProjectController', ['$scope', 'projects',
    function($scope, projects) {

        console.log('here?');

        $scope.projects = projects;
        $scope.name = 'mike';
    }
]);