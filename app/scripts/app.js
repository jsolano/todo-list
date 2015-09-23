'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router'
])
.config(function($stateProvider, $urlRouterProvider) { 

	$urlRouterProvider.otherwise('/main');

	$stateProvider
	    .state('main', {
	      url: '/main',
	      controller: 'MainController',
	      templateUrl: 'main.html'
	})

});