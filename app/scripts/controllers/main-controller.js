'use strict';
angular.module('myApp')
 .controller('MainController', function($scope, $localStorage){
 	
 	$scope.todo = {
 		task : ''
 	};

 	if ($localStorage.tasks) {
 		$scope.tasks = $localStorage.tasks;
 	} else {
 		$scope.tasks = ['Task 1', 'Task 2', 'Task 3'];
 	}

 	$scope.addTask = function() {
 		if ($scope.todo.task) {

 			$scope.tasks.push($scope.todo.task);

 			$localStorage.tasks = $scope.tasks;

 			$scope.todo.task = '';
 		} else {
 			alert('Please enter a valid todo task!');
 		}
 	}

 	$scope.removeTask = function(index) {
 		delete $scope.tasks[index];

 		$localStorage.tasks = $scope.tasks;

 	}
 });