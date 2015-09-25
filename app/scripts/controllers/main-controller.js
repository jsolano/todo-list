'use strict';
angular.module('myApp')
 .controller('MainController', function($scope){
 	$scope.tasks = ['Task 1', 'Task 2', 'Task 3'];
 	$scope.todo = {
 		task : ''
 	};

 	$scope.addTask = function() {
 		if ($scope.todo.task) {
 			$scope.tasks.push($scope.todo.task);
 			$scope.todo.task = '';
 		} else {
 			alert('Please enter a valid todo task!');
 		}
 	}

 	$scope.removeTask = function(index) {
 		delete $scope.tasks[index];
 	}
 });