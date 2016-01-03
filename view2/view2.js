'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', function($scope) {
  $scope.tasks = [
    { action: "Task 1", complete: false, priority: "Normal" },
    { action: "Task 2", complete: true, priority: "Normal" },
    { action: "Task 3", complete: false, priority: "Normal" },
    { action: "Task 4", complete: true, priority: "Normal" }
  ];

  $scope.addTask = function (task) {
    //angular.isDefined - ???????, ??????? ????????? ????????? ??????? ???????? ???????.
    if (angular.isDefined(task) &&
        angular.isDefined(task.action) &&
        angular.isDefined(task.priority)) {
      $scope.tasks.push({
        action: task.action,
        priority: task.priority,
        complete: false
      });
    }
  }
});