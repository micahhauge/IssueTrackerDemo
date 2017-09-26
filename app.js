angular.module('app', ['ngRoute'])
    .factory('TimeEntries', function () {
        return  [
            { project: 'Online Banking App', task: 'update login page', hours: [1.5, 0, 0, 0, 0] },
            // { project: 'Online Banking App', task: 'implement login authentication', hours: [5.5, 1, 0, 0, 0]},
            // { project: 'Android Rest API', task: 'refactor back end', hours: [1.5, 1, 4, 1, 8]},
            // { project: 'Medicade System', task: 'Database design', hours: [0, 1, 8, 8, 0]},
        ];
    })
    .factory('Projects', function () {
        return [
            { name: 'Online Banking App', tasks: ['update login page', 'implement login authentication'] },
            { name: 'Android Rest API', tasks: ['refactor back end'] },
            { name: 'Medicade System', tasks: ['Database design'] },
        ];
    })
    .controller('TimeEntriesController', ['$scope', 'Projects', 'TimeEntries', function ($scope, Projects, TimeEntries) {
        $scope.entries = TimeEntries;
        $scope.projects = Projects;

        $scope.addEntry = function () {
            console.log("add");
            $scope.entries.push({ project: 'select project', task: 'select task', hours: [0, 0, 0, 0, 0]});
        }
    }])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/time-entries.html',
                controller: 'TimeEntriesController',
            })
    }])
